(function() {
  describe('Commands', function() {
    var getMessage, linter;
    linter = null;
    beforeEach(function() {
      return waitsForPromise(function() {
        return atom.packages.activatePackage('linter').then(function() {
          linter = atom.packages.getActivePackage('linter').mainModule.instance;
          return atom.workspace.open(__dirname + '/fixtures/file.txt');
        });
      });
    });
    getMessage = require('./common').getMessage;
    describe('linter:togglePanel', function() {
      return it('toggles the panel visibility', function() {
        var visibility;
        linter.views.bottomPanel.scope = 'Project';
        linter.getActiveEditorLinter().addMessage(getMessage('Error'));
        linter.views.render({
          added: [getMessage('Error')],
          removed: [],
          messages: []
        });
        visibility = linter.views.bottomPanel.getVisibility();
        expect(visibility).toBe(true);
        linter.commands.togglePanel();
        expect(linter.views.bottomPanel.getVisibility()).toBe(!visibility);
        linter.commands.togglePanel();
        return expect(linter.views.bottomPanel.getVisibility()).toBe(visibility);
      });
    });
    return describe('linter:toggle', function() {
      return it('relint when enabled', function() {
        return waitsForPromise(function() {
          return atom.workspace.open(__dirname + '/fixtures/file.txt').then(function() {
            spyOn(linter.commands, 'lint');
            linter.commands.toggleLinter();
            linter.commands.toggleLinter();
            return expect(linter.commands.lint).toHaveBeenCalled();
          });
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL2hvbWUvemd2Ly5hdG9tL3BhY2thZ2VzL2xpbnRlci9zcGVjL2NvbW1hbmRzLXNwZWMuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxFQUFBLFFBQUEsQ0FBUyxVQUFULEVBQXFCLFNBQUEsR0FBQTtBQUNuQixRQUFBLGtCQUFBO0FBQUEsSUFBQSxNQUFBLEdBQVMsSUFBVCxDQUFBO0FBQUEsSUFFQSxVQUFBLENBQVcsU0FBQSxHQUFBO2FBQ1QsZUFBQSxDQUFnQixTQUFBLEdBQUE7ZUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWQsQ0FBOEIsUUFBOUIsQ0FBdUMsQ0FBQyxJQUF4QyxDQUE2QyxTQUFBLEdBQUE7QUFDM0MsVUFBQSxNQUFBLEdBQVMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZCxDQUErQixRQUEvQixDQUF3QyxDQUFDLFVBQVUsQ0FBQyxRQUE3RCxDQUFBO2lCQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBZixDQUFvQixTQUFBLEdBQVksb0JBQWhDLEVBRjJDO1FBQUEsQ0FBN0MsRUFEYztNQUFBLENBQWhCLEVBRFM7SUFBQSxDQUFYLENBRkEsQ0FBQTtBQUFBLElBUUMsYUFBYyxPQUFBLENBQVEsVUFBUixFQUFkLFVBUkQsQ0FBQTtBQUFBLElBVUEsUUFBQSxDQUFTLG9CQUFULEVBQStCLFNBQUEsR0FBQTthQUM3QixFQUFBLENBQUcsOEJBQUgsRUFBbUMsU0FBQSxHQUFBO0FBRWpDLFlBQUEsVUFBQTtBQUFBLFFBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBekIsR0FBaUMsU0FBakMsQ0FBQTtBQUFBLFFBQ0EsTUFBTSxDQUFDLHFCQUFQLENBQUEsQ0FBOEIsQ0FBQyxVQUEvQixDQUEwQyxVQUFBLENBQVcsT0FBWCxDQUExQyxDQURBLENBQUE7QUFBQSxRQUVBLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBYixDQUFvQjtBQUFBLFVBQUMsS0FBQSxFQUFPLENBQUMsVUFBQSxDQUFXLE9BQVgsQ0FBRCxDQUFSO0FBQUEsVUFBK0IsT0FBQSxFQUFTLEVBQXhDO0FBQUEsVUFBNEMsUUFBQSxFQUFVLEVBQXREO1NBQXBCLENBRkEsQ0FBQTtBQUFBLFFBSUEsVUFBQSxHQUFhLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQXpCLENBQUEsQ0FKYixDQUFBO0FBQUEsUUFLQSxNQUFBLENBQU8sVUFBUCxDQUFrQixDQUFDLElBQW5CLENBQXdCLElBQXhCLENBTEEsQ0FBQTtBQUFBLFFBTUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFoQixDQUFBLENBTkEsQ0FBQTtBQUFBLFFBT0EsTUFBQSxDQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQXpCLENBQUEsQ0FBUCxDQUFnRCxDQUFDLElBQWpELENBQXNELENBQUEsVUFBdEQsQ0FQQSxDQUFBO0FBQUEsUUFRQSxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQWhCLENBQUEsQ0FSQSxDQUFBO2VBU0EsTUFBQSxDQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQXpCLENBQUEsQ0FBUCxDQUFnRCxDQUFDLElBQWpELENBQXNELFVBQXRELEVBWGlDO01BQUEsQ0FBbkMsRUFENkI7SUFBQSxDQUEvQixDQVZBLENBQUE7V0F3QkEsUUFBQSxDQUFTLGVBQVQsRUFBMEIsU0FBQSxHQUFBO2FBQ3hCLEVBQUEsQ0FBRyxxQkFBSCxFQUEwQixTQUFBLEdBQUE7ZUFDeEIsZUFBQSxDQUFnQixTQUFBLEdBQUE7aUJBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFmLENBQW9CLFNBQUEsR0FBWSxvQkFBaEMsQ0FBcUQsQ0FBQyxJQUF0RCxDQUEyRCxTQUFBLEdBQUE7QUFDekQsWUFBQSxLQUFBLENBQU0sTUFBTSxDQUFDLFFBQWIsRUFBdUIsTUFBdkIsQ0FBQSxDQUFBO0FBQUEsWUFDQSxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQWhCLENBQUEsQ0FEQSxDQUFBO0FBQUEsWUFFQSxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQWhCLENBQUEsQ0FGQSxDQUFBO21CQUdBLE1BQUEsQ0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQXZCLENBQTRCLENBQUMsZ0JBQTdCLENBQUEsRUFKeUQ7VUFBQSxDQUEzRCxFQURjO1FBQUEsQ0FBaEIsRUFEd0I7TUFBQSxDQUExQixFQUR3QjtJQUFBLENBQTFCLEVBekJtQjtFQUFBLENBQXJCLENBQUEsQ0FBQTtBQUFBIgp9

//# sourceURL=/home/zgv/.atom/packages/linter/spec/commands-spec.coffee
