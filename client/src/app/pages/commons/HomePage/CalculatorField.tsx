import { Label } from '../../../components/Form/Label';
import Input from '../../../components/Form/Input';
import FormImage from '../../../components/Form/FormImage';

const CalculatorField = ({ name, value, onInputChange, Icon }: any) => {
  return (
    <Label>
      <FormImage src={Icon} alt={name} />
      {name}:
      <Input
        type='number'
        onChange={onInputChange}
        value={value}
        minLength={0}
        maxLength={99}
        title='Enter only english letters and digits!'
        required
      />
    </Label>
  );
};

export default CalculatorField;
