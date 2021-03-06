import '$pageflow/frontend';

import '$support/fakeBrowserFeatures';
import sinon from 'sinon';

describe('pageflow.mediaPlayer.volumeFading', function() {
  describe('#volume', function() {
    it('rejects promise of running fade', function() {
      var failHandler = sinon.spy();
      var player = fakePlayer({volume: 100});
      pageflow.mediaPlayer.volumeFading(player);

      player.fadeVolume(50, 10).fail(failHandler);
      player.volume(90);

      expect(failHandler).toHaveBeenCalled();
    });
  });

  describe('#fadeVolume', function() {
    it('resolves promise after fading down', function() {
      var player = fakePlayer({volume: 100});
      pageflow.mediaPlayer.volumeFading(player);

      return player.fadeVolume(50, 10).then(function() {
        expect(player.volume()).toBe(50);
      });
    });

    it('resolves promise after fading up', function() {
      var player = fakePlayer({volume: 50});
      pageflow.mediaPlayer.volumeFading(player);

      return player.fadeVolume(100, 10).then(function() {
        expect(player.volume()).toBe(100);
      });
    });

    it('resolves promise if unchanged', function() {
      var player = fakePlayer({volume: 100});
      pageflow.mediaPlayer.volumeFading(player);

      return player.fadeVolume(100, 10).then(function() {
        expect(player.volume()).toBe(100);
      });
    });

    it('does not change volume directly', function() {
      var player = fakePlayer({volume: 50});
      pageflow.mediaPlayer.volumeFading(player);

      var promise = player.fadeVolume(100, 10);
      expect(player.volume()).toBe(50);
      return promise;
    });

    it('rejects promise if called again before fade is finished', function() {
      var failHandler = sinon.spy();
      var player = fakePlayer({volume: 100});
      pageflow.mediaPlayer.volumeFading(player);

      player.fadeVolume(50, 10).fail(failHandler);
      return player.fadeVolume(90, 10).then(function() {
        expect(failHandler).toHaveBeenCalled();
      });
    });
  });

  function fakePlayer(options) {
    var volume = options.volume;

    return {
      volume: function(value) {
        if (typeof value === 'undefined') {
          return volume;
        }
        else {
          volume = value;
        }
      },

      on: function() {},
      one: function() {},
      off: function() {}
    };
  }
});
