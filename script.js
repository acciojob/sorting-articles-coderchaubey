document.addEventListener('DOMContentLoaded', function() {
      const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

      const excludedWords = ['a', 'an', 'the'];

      const sortedBands = bands.sort((a, b) => {
        const nameA = removeExcludedWords(a);
        const nameB = removeExcludedWords(b);
        return nameA.localeCompare(nameB);
      });

      const bandList = document.getElementById('band');

      sortedBands.forEach((band) => {
        const listItem = document.createElement('li');
        listItem.textContent = band;
        bandList.appendChild(listItem);
      });

      function removeExcludedWords(string) {
        return string.replace(/\b(a|an|the)\b/gi, '').trim();
      }
    });