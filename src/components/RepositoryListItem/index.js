import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Text } from '..';
import { ThemeContext } from '../../theme';
import { NAVIGATION_TO_DETAIL_SCREEN } from '../../navigation/routes';

const RepositoryListItem = ({
  item,
  navigation,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Card
      onPress={() => navigation.navigate(NAVIGATION_TO_DETAIL_SCREEN, { item })}
      style={styles.container}
    >
      <Text style={styles.text(theme)}>{item.full_name}</Text>
      <Text>{item.description}</Text>
      <View style={styles.insightContainer}>
        <View style={styles.row}>
          <Icon name="star" size={20} color="#c0c0c0" />
          <Text> {item.stargazers_count}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="code-fork" size={20} color="#c0c0c0" />
          <Text> {item.forks_count}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="eye" size={20} color="#c0c0c0" />
          <Text> {item.watchers_count}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 100,
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 8,
  },
  text: theme => ({
    ...theme.typography.headingTextBold,
  }),
  insightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
  }
});

RepositoryListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

RepositoryListItem.defaultProps = {};

export default RepositoryListItem;
