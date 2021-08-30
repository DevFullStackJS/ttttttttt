import models from '../../data/models';

const mapStateToProps = (state: any) =>
  Object.keys(models).reduce((acc, curr) => ({...acc, [curr]: state[curr]}), {
    location: state.location,
  });

export default mapStateToProps;
