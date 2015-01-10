var Feed = Backbone.Model.extend({
  idAttribute: "feed_id",
  getTemplateData: function() {
    var data = this.toJSON();
    if (data.unreadCount) {
      data.hasUnreadCount = true;
    }
    return data;
  }
});

var FeedCollection = Backbone.Collection.extend({
  initialize: function() {
    this.on('change', this.populateCounts);
    this.on('add', this.populateCounts);
    this.on('remove', this.populateCounts);
  },
  model: Feed,
  url: function() {
    return '/api/v2/subscriptions/list?access_token=' + window.auth_token;
  },
  parse: function(response) {
    return response.feeds;
  },
  updateCounts: function(newCountMap) {
    var countMap = newCountMap || this.countMap || {};
    this.countMap = countMap;
    var keys = Object.keys(countMap),
        i,
        currentFeed,
        findFeed = function(model) {
          return model.get('feed_id')===parseInt(keys[i], 10);
        };

    for (i=0; i < keys.length; i++) {
      currentFeed = this.find(findFeed);
      if (currentFeed) {
        currentFeed.set('unreadCount', countMap[keys[i]]);
      }
    }
  },
  populateCounts: function() {
    this.updateCounts();
  }
});

var FeedView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change:unreadCount", this.render);
  },
  tagName: "li",
  className: "feed",
  render: function() {
    var compiled = MyApp.Templates.feed;
    var html = compiled(this.model.getTemplateData());
    this.$el.html(html);
    return this;
  }
});

var FeedCollectionView = Backbone.View.extend({
  tagName: "ul",
  className: "feeds",
  render: function() {
    this.collection.each(function(feed) {
      var feedView = new FeedView({ model: feed });
      this.$el.append(feedView.render().el);
    }, this);
    return this;
  }
});

var FeedItem = Backbone.Model.extend({
  idAttribute: "feed_item_id",
  getTemplateData: function() {
    var data = this.toJSON();
    data.created_at = prettyDate(new Date(data.created_at * 1000));
    data.body = html_sanitize(data.body,
      function(url) { return url; /* rewrite urls if needed */ },
      function(id) { return id; /* rewrite ids, names and classes if needed */ });
    data.title = html_sanitize(data.title,
      function(url) { return url; /* rewrite urls if needed */ },
      function(id) { return id; /* rewrite ids, names and classes if needed */ });
    
    return data;
  },
  toggleSelected: function() {
    //drewFIXME have to unselect the currently selected one!!
    var selected = !this.get('selected');
    this.set('selected', selected);
    return selected;
  },
  toggleStarred: function() {
    var self = this,
        starred = !self.get('starred'),
        feed_item_id = self.get('feed_item_id'),
        req = $.post('/api/v2/feed_items/update?feed_item_id=' + feed_item_id + '&access_token=' + window.auth_token + '&starred=' + starred).done(function(){
          self.set('starred', starred);
        });
    return req.promise();
  }
});

var FeedItemCollection = Backbone.Collection.extend({
  initialize: function() {
    this.on('change', this.calculateFeedCounts);
    this.on('add', this.calculateFeedCounts);
    this.on('remove', this.calculateFeedCounts);
  },
  model: FeedItem,
  url: function() {
    return '/api/v2/feed_items/list?read=false&access_token=' + window.auth_token;
  },
  parse: function(response) {
    return response.feed_items;
  },
  calculateFeedCounts: function() {
    var countMap = {};
    this.each(function(model) {
      var feed_id = model.get('feed_id');
      if (feed_id) {
        if (_.isUndefined(countMap[feed_id])) {
          countMap[feed_id] = 0;
        }
        countMap[feed_id]++;
      }
    });
    this.trigger('changeCountMap', countMap);
  }
});

var FeedItemView = Backbone.View.extend({
  events: {
    "click a.toggleRead" : "toggleRead",
    "click a.toggleStarred" : "toggleStarred",
    "click .feed_item_header" : "showHide"
  },
  tagName: "div",
  className: "feedItem",
  render: function() {
    var compiled = MyApp.Templates.feedItem;
    var html = compiled(this.model.getTemplateData());
    this.$el.html(html);
    return this;
  },
  toggleRead: function(e) {
    e.preventDefault() && e.stopPropagation();
  },
  toggleStarred: function(e) {
    e.preventDefault() && e.stopPropagation();
    var self = this;
    this.model.toggleStarred().done(function(){
      //drewFIXME try altering just the classname instead of a total rerender
      self.render();
    });
  },
  showHide: function(e) {
    e.preventDefault() && e.stopPropagation();
    this.$('.feed_item_content').toggleClass('selected', this.model.toggleSelected());
  }
});

var FeedItemCollectionView = Backbone.View.extend({
  tagName: "div",
  className: "feedItems",
  render: function() {
    this.collection.each(function(feedItem) {
      var feedItemView = new FeedItemView({ model: feedItem });
      this.$el.append(feedItemView.render().el);
    }, this);
    return this;
  }
});
