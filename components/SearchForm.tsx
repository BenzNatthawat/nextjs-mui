import {
  Button,
  Typography,
  Container,
  Box,
  Card,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Link from "next/link";
import type { NextPage } from "next";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Table from "../components/Table";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";

const SearchForm: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset, formState, control } = useForm();
  const { onChange, onBlur, name, ref } = register("date");

  const onSubmit = (data: any): void => {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    router.push("/");
  };

  const handleChange = (newValue: any | null) => {
    console.log(newValue);
    console.log(name);
    // onChange({ [name]: newValue });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("username")}
        fullWidth
        size="small"
        autoComplete="username"
        type="text"
        label="User Name"
        name="username"
      />
      <Button variant="contained" type="submit" className="bg-blue-500">
        Search
      </Button>
      <Button type="submit" variant="contained" className="bg-blue-500">
        Clear
      </Button>
      <Button
        variant="contained"
        onClick={() => router.push("/new")}
        className="bg-blue-500"
      >
        New
      </Button>

      <Controller
        control={control}
        name="date_start"
        render={({ field: { onChange, name, value } }) => (
          <>
            <DatePicker
              value={value || ""}
              onChange={(date: any) => {
                onChange(date?.isValid ? date : "");
              }}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Outlined" />
              )}
            />
          </>
        )}
      />

      <Controller
        control={control}
        name="date_end"
        render={({ field: { onChange, name, value } }) => (
          <>
            <DatePicker
              value={value || ""}
              onChange={(date: any) => {
                onChange(date?.isValid ? date : "");
              }}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Outlined" />
              )}
            />
          </>
        )}
      />

      <FormControl size="small">
        <InputLabel id="demo-select-small">Age</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={10}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small">
        <InputLabel id="demo-select-small">Age</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={10}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

export default SearchForm;
