import React, {useState} from 'react';
import {FlatList, View, Text, RefreshControl} from 'react-native';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import {ApplicationStyles, Fonts} from '../../theme';
import strings from '../../constants/strings';

const propTypes = {
  data: PropTypes.array.isRequired,
  renderer: PropTypes.func.isRequired,
  meta: PropTypes.object,
  fetchMore: PropTypes.func,
  loading: PropTypes.bool.isRequired,
};

const defaultProps = {
  data: [],
  renderer: <></>,
  header: <></>,
  meta: null,
  loading: false,
  refreshing: false,
};

const PaginatedList = ({
  data,
  renderer,
  meta,
  fetchMore,
  header,
  loading,
  horizontal,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onEndReached = () => {
    setRefreshing(false);
    if (!loading && meta && meta.hasNext) {
      fetchMore(false);
    }
  };

  const _onRefresh = () => {
    setRefreshing(true);
    if (!loading && meta && meta.hasNext) {
        fetchMore(true);
    }
  };

  const footer = () =>
    loading ? (
      <Spinner
        style={[
          ApplicationStyles.fullScreenSpinner,
          horizontal && ApplicationStyles.paginatedHorizontalFlatlistSpinner,
        ]}
      />
    ) : null;

  const emptyContainer = () => (
    <View style={ApplicationStyles.centered}>
      <Text style={[Fonts.medium, {textAlign: 'center'}]}>
        {strings.noDataAvailable}
      </Text>
    </View>
  );

  return (
    <FlatList
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      data={data}
      extraData={data}
      keyExtractor={item => item?.id?.toString() || item?.createdOn}
      initialNumToRender={20}
      numColumns={1}
      refreshControl={
        <RefreshControl
          refreshing={loading && refreshing}
          onRefresh={_onRefresh}
        />
      }
      contentContainerStyle={horizontal && {paddingRight: 40}}
      renderItem={renderer}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.01}
      scrollEventThrottle={100}
      ListHeaderComponent={header}
      ListFooterComponent={footer}
      ListEmptyComponent={emptyContainer}
    />
  );
};

PaginatedList.propTypes = propTypes;
PaginatedList.defaultProps = defaultProps;
export default PaginatedList;
