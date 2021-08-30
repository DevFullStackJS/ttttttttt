export default {
  getAllCategorie: (res, _, getState) => {
    if (res && res?.data?.items) {
      const categorie = getState && getState() ? getState().categorie : {};
      return {...categorie, listCategorie: res.data.items, error: false};
    }
    return {error: true, listCategorie: []};
  },
};
