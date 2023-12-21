import { useEffect, useState } from 'react';
import { Input } from 'antd';
import { Spin } from 'antd';

import { SearchIcon } from 'assets/icons';
import { TChangeInputEvent } from 'interfaces/common-interfaces';

interface ISearchInputProps {
  className?: string;
  loading?: boolean;
  placeHolder?: string;
  onChange: (value: string) => void;
}

const SearchInput = ({ className, loading, placeHolder, onChange }: ISearchInputProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (e: TChangeInputEvent) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(searchValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);

  return (
    <Input
      className={`${className ?? ''} Input Input__search`}
      placeholder={placeHolder ?? 'Search'}
      onChange={handleChange}
      suffix={loading ? <Spin /> : <SearchIcon />}
      size="middle"
    />
  );
};

export default SearchInput;
