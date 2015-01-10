$(function() {
  window.auth_token = '1634956a675120dfb0df75a1b5b5b5e5'
  var feedCollection = new FeedCollection();
  feedCollection.fetch({
    success: function(data) {
      var feedListView = new FeedCollectionView({ collection: data, el: $('#feedList') });
      feedListView.render();
    }
  });
  var feedItemCollection = new FeedItemCollection();
  feedItemCollection.fetch({
    success: function(data) {
      var feedItemsView = new FeedItemCollectionView({ collection: data, el: $('#feedItemList') });
      feedItemsView.render();
    }
  });
  feedCollection.listenTo(feedItemCollection, "changeCountMap", feedCollection.updateCounts);
});

