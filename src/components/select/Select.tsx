import * as React from 'react';
import {StyledSelect , SelectWrapper} from './styled.Select';

export interface Props {
  name?: string
  selected?: string
  options : Array<string>
  onChange?: (value : string) => void
}


export function Select({ name, onChange , options , selected }: Props) {
  // setting state for input change 

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
      let value = e?.target?.value;
      // call on change only if value more than 3 
      onChange && onChange(value);
  }
  
  return (
    <SelectWrapper>
      <StyledSelect name={name} onChange={handleChange} defaultValue={selected}>
        {
          options.map((value : string , _key : number)=> {
            return <option key={_key} value={value}>{value}</option>;
          })
        }
      </StyledSelect>
    </SelectWrapper>
  );
}
