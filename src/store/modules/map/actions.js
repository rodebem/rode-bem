export function openModalFilter() {
  return {
    type: '@map/OPEN_MODAL_FILTER',
  };
}

export function closeModalFilter() {
  return {
    type: '@map/CLOSE_MODAL_FILTER',
  };
}

export function openModalEvaluate() {
  return {
    type: '@map/OPEN_MODAL_EVALUATE',
  };
}

export function closeModalEvaluate() {
  return {
    type: '@map/CLOSE_MODAL_EVALUATE',
  };
}
