import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type ChartSelectProps = {
  handleChange: (event: SelectChangeEvent) => void;
  values: string[];
  selectedValue: string;
};

export default function ChartSelect({
  handleChange,
  values,
  selectedValue,
}: ChartSelectProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="chart-select-label">Pytanie</InputLabel>
        <Select
          labelId="chart-select-label"
          id="chart-select"
          value={selectedValue}
          label="Age"
          onChange={handleChange}
        >
          {values.map((value) => (
            <MenuItem value={value} key={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
