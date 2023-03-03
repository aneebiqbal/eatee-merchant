import React from 'react';
import {Divider} from 'react-native-elements';
import {Colors, Metrics} from '../../theme';

const propTypes = {};

const defaultProps = {};

const ContentDivider = ({onPress, style, item}) => {
  return (
    <Divider
      orientation="horizontal"
      width={1}
      color={Colors.secGrayLight}
      style={[Metrics.verticalMargin, Metrics.horizontalMargin, style]}
    />
  );
};

ContentDivider.propTypes = propTypes;

ContentDivider.defaultProps = defaultProps;

export default ContentDivider;
