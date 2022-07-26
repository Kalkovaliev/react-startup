import Fahrenheit from "./Fahrenheit";
import Input from "./Input";
import Kelvin from "./Kelvin";

const TemperatureConverter = () => {
    return (
        <div>
            <h1>☃️ Temperature Converter 🌞</h1>
            <Input>
                {(value: number | undefined) => (
                    <>
                        <Kelvin value={value} />
                        <Fahrenheit value={value} />
                    </>
                )}
            </Input>
        </div>
    );
}

export default TemperatureConverter;