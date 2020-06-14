import produce from 'immer';

const INITIAL_STATE = {
  evaluateModalOpen: false,
  filterModalOpen: false,
  loading: false,
  destination: {
    origin: {
      latitude: -3.7899266,
      longitude: -38.5891584,
    },
    destination: {
      latitude: -23.6815303,
      longitude: -46.8761689
    }
  }
};

export default function map(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@map/OPEN_MODAL_FILTER': {
        draft.filterModalOpen = true;
        break;
      }
      case '@map/CLOSE_MODAL_FILTER': {
        draft.filterModalOpen = false;
        break;
      }
      case '@map/OPEN_MODAL_EVALUATE': {
        draft.evaluateModalOpen = true;
        break;
      }
      case '@map/CLOSE_MODAL_EVALUATE': {
        draft.evaluateModalOpen = false;
        break;
      }
      default:
    }
  });
}
