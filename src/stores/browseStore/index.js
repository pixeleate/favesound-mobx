import { observable, action } from 'mobx';

class BrowseStore {

  @observable activitiesByGenre;

  constructor() {
    this.activitiesByGenre = {};
  }

  @action mergeActivitiesByGenre = (genre, list) => {
    this.activitiesByGenre[genre].push(list);
  }

}

const browseStore = new BrowseStore();

export default browseStore;
export { BrowseStore };