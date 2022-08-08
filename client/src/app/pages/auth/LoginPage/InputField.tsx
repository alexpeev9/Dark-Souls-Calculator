import { Label } from '../../../components/Form/Label';
import Input from '../../../components/Form/Input';
import FormImage from '../../../components/Form/FormImage';

const InputField = ({ name, value, type, onInputChange, Icon }: any) => {
  return (
    <Label>
      <FormImage src={Icon} alt={name} />
      {name}:
      <Input
        type={type}
        onChange={onInputChange}
        value={value}
        minLength={4}
        maxLength={11}
        pattern='^[a-zA-Z0-9]+$'
        title='Enter only english letters and digits!'
        required
      />
    </Label>
  );
};

export default InputField;
