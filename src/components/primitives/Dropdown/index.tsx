import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown: React.FC<{
  ddItems: any;
  onSelect: (val: any) => void;
  index?: number;
}> = ({ddItems, onSelect, index = 1}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState(ddItems);

  return (
    <View style={{zIndex: 12 / index}}>
      <DropDownPicker
        closeAfterSelecting
        multiple={true}
        open={open}
        value={value}
        items={items}
        mode="BADGE"
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={onSelect}
        containerStyle={{marginBottom: 10}}
        style={{borderColor: 'lightgray'}}
        zIndex={3000}
      />
    </View>
  );
};

export default Dropdown;
