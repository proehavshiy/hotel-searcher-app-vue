export class FavouriteHotelsForRendering {
  constructor(array) {
    this._data = array;
  }

  get data() {
    return this._data;
  }

  sortByParam({ name, filterParam }) {
    switch (name) {
      case 'Цена':
        this._sortByPrice(filterParam);
        return this;
      case 'Рейтинг':
        this._sortByRating(filterParam);
        return this;
      default:
        return this;
    }
  }

  _sortByPrice(filterParam) {
    switch (filterParam) {
      case 'max':
        this._data = [...this._data].sort((a, b) => b.priceAvg - a.priceAvg);
        break;
      case 'min':
        this._data = [...this._data].sort((a, b) => a.priceAvg - b.priceAvg);
        break;
      default:
        break;
    }
  }

  _sortByRating(filterParam) {
    switch (filterParam) {
      case 'max':
        this._data = [...this._data].sort((a, b) => b.stars - a.stars);
        break;
      case 'min':
        this._data = [...this._data].sort((a, b) => a.stars - b.stars);
        break;
      default:
        break;
    }
  }
}
