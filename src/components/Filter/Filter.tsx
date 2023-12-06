import React from 'react';
import { Label, Input } from './Filter.styled';

interface IFilter {
  filter: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ filter, onChange }: IFilter) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      ></Input>
    </Label>
  );
};

export default Filter;
