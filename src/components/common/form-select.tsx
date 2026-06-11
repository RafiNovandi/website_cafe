import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";

export default function FormSelect<T extends FieldValues>({
  form,
  name,
  label,
  selectItem,
}: {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
  selectItem: { value: string; label: string; disable?: boolean }[];
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field: { onChange, ...rest } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select {...rest} onValueChange={onChange}>
              <SelectTrigger
                className={cn("w-full", {
                  "border-red-500": form.formState.errors[name]?.message,
                })}
              >
                <SelectValue placeholder={`select ${label}`}></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{label}</SelectLabel>
                  {selectItem.map((item) => (
                    <SelectItem
                      key={item.label}
                      value={item.value}
                      disabled={item.disable}
                      className="capitalize"
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
}
