//This is a presentational component. They are usually stateless: they do not contain their own React state, unless they need a state for UI purposes.

import useDogImages from "./useDogsImages";

//Presentational components receive their data from container components.
const DogImages = (): JSX.Element => {

    const { data } = useDogImages("https://dog.ceo/api/breed/labrador/images/random/6");
    return (
        <>
            {data.map((dog: string, i: number) => <img data-testid={`dog-${i}`} src={dog} key={i} alt="Dog" />)}
        </>);
}

export default DogImages;
