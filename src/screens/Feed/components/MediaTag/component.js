import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StyledText } from 'kitsu/components/StyledText';
import PropTypes from 'prop-types';
import { styles } from './styles';

export const MediaTag = ({ disabled, media, episode, navigation }) => (
  <View style={styles.mediaTagView}>
    <TouchableOpacity
      disabled={disabled}
      onPress={() =>
        navigation.navigate('MediaPages', { mediaId: media.id, mediaType: media.type })}
      style={styles.mediaTag}
    >
      <StyledText color="green" size="xxsmall">
        {media.canonicalTitle}
      </StyledText>
    </TouchableOpacity>
    {episode && (
      <TouchableOpacity
        disabled={disabled}
        onPress={() =>
          navigation.navigate('MediaPages', { mediaId: media.id, mediaType: media.type })}
        style={styles.episodeTagView}
      >
        <View style={styles.episodeTagLine} />
        <View style={styles.mediaTag}>
          <StyledText color="green" size="xxsmall">{`E ${episode.number}`}</StyledText>
        </View>
      </TouchableOpacity>
    )}
  </View>
);

MediaTag.propTypes = {
  media: PropTypes.shape({
    canonicalTitle: PropTypes.string.isRequired,
  }).isRequired,
  episode: PropTypes.shape({
    number: PropTypes.number.isRequired,
  }),
  navigation: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
};

MediaTag.defaultProps = {
  episode: null,
  disabled: false,
};