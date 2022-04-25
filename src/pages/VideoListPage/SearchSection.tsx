import React, {ReactElement, useState} from 'react';
import {Dropdown, Icon, TextInput, View} from '../../components';
import {SvgConsts} from '../../constants';
import {GenreModel, SearchValuesModel} from '../../models';

let searchValues: SearchValuesModel = {
  title: '',
  genre_id: [],
  release_year: [],
};

const SearchSection: React.FC<{
  onChange: Function;
  genreList: GenreModel[];
  yearList: number[];
  setColNumber?: any;
  numColumns?: number;
}> = ({
  onChange,
  genreList,
  yearList,
  setColNumber,
  numColumns,
}): ReactElement => {
  const [hasMoreFilter, setMoreFilter] = useState(false);
  const setItemValueOnChange = (key: string, value: string & number[]) => {
    searchValues[key as keyof SearchValuesModel] = value;
  };

  const onAnyItemChanged = (key: string, value: any) => {
    setItemValueOnChange(key, value);
    onChange(searchValues);
  };

  return (
    <View style={{zIndex: 20}}>
      <TextInput
        placeholder="Search video"
        onChange={value => {
          onAnyItemChanged('title', value);
        }}
        style={{borderWidth: 2, marginBottom: 10}}
      />

      {hasMoreFilter && (
        <View.Animated animation={'fadeIn'} style={{marginTop: 20}}>
          <Dropdown
            index={1}
            onSelect={(value: any) => {
              onAnyItemChanged('genre_id', value);
            }}
            ddItems={genreList.map((genre: GenreModel) => ({
              label: genre.name,
              value: genre.id,
            }))}
          />
          <Dropdown
            index={2}
            onSelect={(value: any) => {
              onAnyItemChanged('release_year', value);
            }}
            ddItems={yearList.map((year: number) => ({
              label: year,
              value: year,
            }))}
          />
        </View.Animated>
      )}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 15,
          zIndex: -1,
        }}>
        <Icon
          text="Filter options"
          svgpath={SvgConsts.filterIcon}
          onClick={() => setMoreFilter(!hasMoreFilter)}
          style={{display: 'flex', flexDirection: 'row'}}
        />

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Icon
            style={{paddingTop: 1}}
            svgpath={SvgConsts.rowIcon(
              numColumns === 2 ? 'black' : 'lightgray',
            )}
            onClick={() => setColNumber(2)}
          />
          <Icon
            svgpath={SvgConsts.colIcon(
              numColumns === 1 ? 'black' : 'lightgray',
            )}
            height={18}
            onClick={() => setColNumber(1)}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchSection;
