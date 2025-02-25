import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from '@/components/ui/select';

import { ChevronDownIcon } from '@/components/ui/icon';

interface SelectInput {
  options: SelectOption[];
  placeholder?: string;
}

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export const CustomSelect = ({ placeholder, options }: SelectInput) => {
  return (
    <Select>
      <SelectTrigger style={{ elevation: 0.5 }} variant="rounded" size="xl">
        <SelectInput
          placeholder={placeholder}
          style={{ minWidth: 180, maxWidth: 200 }}
        />
        <SelectIcon className="mr-3" as={ChevronDownIcon} />
      </SelectTrigger>

      <SelectPortal>
        <SelectBackdrop />

        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>

          {options.map((option) => (
            <SelectItem
              key={option.value}
              label={option.label}
              value={option.value}
              disabled={option.disabled}
            />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};
