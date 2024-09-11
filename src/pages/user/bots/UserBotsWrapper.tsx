import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { BotsModel } from '../../../models/BotsModel';
import { PackageModel } from '../../../models/PackageModel';
import UserBots from './Bots';

interface UserBotsWrapperProps {
  bots: BotsModel[];
  packages: PackageModel[];
}

const UserBotsWrapper: React.FC<UserBotsWrapperProps> = ({ bots, packages }) => {
  return <UserBots bots={bots} packages={packages} />;
};

const mapStateToProps = (state: RootState) => ({
  bots: state.botsReducer.bots,
  packages: state.pkgReducer.packages,
});

export default connect(mapStateToProps)(UserBotsWrapper);
