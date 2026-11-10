(() => {
  'use strict';
  document.addEventListener('DOMContentLoaded', () => {
    const data = window.POCKET_RESIDENTS;
    const select = document.getElementById('resident-select');
    if (!data || !select) return;
    const characters = data.characters;
    let index = Math.max(0, characters.findIndex(character => '#' + character.base === location.hash));
    const text = (value, locale) => value?.[locale] || value?.en || '';
    const put = (id, value) => { document.getElementById(id).textContent = value; };
    function render() {
      const locale = document.documentElement.lang === 'ja' ? 'ja' : 'en';
      const character = characters[index];
      select.replaceChildren(...characters.map((entry, number) => {
        const option = document.createElement('option');
        option.value = entry.base;
        option.textContent = String(number + 1).padStart(2, '0') + '  ' + text(entry.name, locale) + ' / ' + text(entry.speciesName, locale);
        option.selected = number === index;
        return option;
      }));
      put('resident-position', String(index + 1).padStart(2, '0') + ' / ' + characters.length + '  —  ' + text(character.name, locale));
      put('resident-species', text(character.speciesName, locale));
      put('resident-stage', text(character.appearance, locale));
      put('resident-art-note', text(character.artNote, locale));
      put('resident-name', text(character.name, locale));
      put('resident-designation', text(character.designation, locale));
      put('resident-belief', text(character.belief, locale));
      put('resident-role', text(character.role, locale));
      put('resident-personality', text(character.personality, locale));
      put('resident-specs', text(character.classification, locale));
      const dimensions = character.canonicalDimensions;
      const dimensionText = dimensions ? text(data.dimensionLabels.lengthM, locale) + ': ' + dimensions.lengthM + '  /  ' + text(data.dimensionLabels.weightKg, locale) + ': ' + dimensions.weightKg : '';
      put('resident-dimensions', dimensionText);
      document.getElementById('resident-dimensions').hidden = !dimensions;
      const art = document.getElementById('resident-image');
      art.src = character.image;
      art.alt = text(character.name, locale) + ' / ' + text(character.speciesName, locale);
      const salary = character.salary;
      const fields = ['gross', 'disposable', 'ownerRevenue', 'unpaidClaim'];
      const salaryNodes = fields.filter(key => salary[key] !== null && salary[key] !== undefined).map(key => {
        const row = document.createElement('div');
        const label = document.createElement('dt');
        const value = document.createElement('dd');
        label.textContent = text(data.salaryLabels[key], locale);
        value.textContent = new Intl.NumberFormat(locale).format(salary[key]) + ' ' + salary.currency;
        row.append(label, value);
        return row;
      });
      document.getElementById('salary-values').replaceChildren(...salaryNodes);
      put('salary-status', text(salary.status, locale) + ' · ' + text(salary.period, locale));
      put('salary-note', text(salary.note, locale));
      document.getElementById('salary-note').hidden = !salary.note;
      put('resident-pay-use', text(character.payUse, locale));
      put('economy-title', text(data.economy.title, locale));
      put('economy-intro', text(data.economy.intro, locale));
      document.getElementById('economy-rules').replaceChildren(...data.economy.rules.map(rule => {
        const item = document.createElement('li');
        item.textContent = text(rule, locale);
        return item;
      }));
    }
    function choose(next) {
      index = (next + characters.length) % characters.length;
      history.replaceState(null, '', location.pathname + location.search + '#' + characters[index].base);
      document.querySelectorAll('[data-locale]').forEach(link => {
        const url = new URL(link.href);
        url.hash = characters[index].base;
        link.href = url.pathname + url.search + url.hash;
      });
      render();
    }
    select.addEventListener('change', () => choose(characters.findIndex(character => character.base === select.value)));
    document.querySelectorAll('[data-resident-step]').forEach(button => button.addEventListener('click', () => choose(index + Number(button.dataset.residentStep))));
    function fromHash() {
      const next = characters.findIndex(character => '#' + character.base === location.hash);
      if (next >= 0) { index = next; render(); }
    }
    addEventListener('hashchange', fromHash);
    addEventListener('popstate', fromHash);
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    render();
  });
})();
