import { Label } from '../../../components/elements/Form/Label';
import Input from '../../../components/elements/Form/Input';
import FormImage from '../../../components/elements/Form/FormImage';

const CalculatorField = ({ name, value, onInputChange, Icon }: any) => {
  return (
    <Label>
      <FormImage src={Icon} alt={name} />
      {name}:
      <Input
        type='number'
        onChange={onInputChange}
        value={value}
        min='0'
        max='99'
        title='Enter only english letters and digits!'
        required
      />
    </Label>
  );
};

export default CalculatorField;
