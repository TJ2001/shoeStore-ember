import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ordered-shoes', 'Integration | Component | ordered shoes', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ordered-shoes}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ordered-shoes}}
      template block text
    {{/ordered-shoes}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
