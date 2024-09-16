import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { BotsModel } from '../../../models/BotsModel';
import { PackageModel } from '../../../models/PackageModel';
import UserBots from './Bots';

interface UserBotsWrapperProps {
  bots: BotsModel[];
  packages: PackageModel[];
  loading: boolean
}

const UserBotsWrapper: React.FC<UserBotsWrapperProps> = ({ bots, packages, loading }) => {
  return <UserBots bots={bots} packages={packages} loading={loading}/>;
};

const mapStateToProps = (state: RootState) => ({
  bots: state.botsReducer.bots,
  packages: state.pkgReducer.packages,
  loading: state.botsReducer.loading
});
export default connect(mapStateToProps)(UserBotsWrapper);
