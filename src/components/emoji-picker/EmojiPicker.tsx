import Picker from 'emoji-picker-react';

const EmojiPicker = () => {
  return (
    <Picker
      onEmojiClick={() => {
        console.log('OK');
      }}
    />
  );
};

export default EmojiPicker;
