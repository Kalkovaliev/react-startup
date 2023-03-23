import useHover from "./useHover";
import withHover from "./withHover";
import withLoader from "./withLoader";

//Presentational components receive their data from container components.
const DogImages = (props: any) => {

    const [hoverRef, hovering] = useHover();

    return (
        <div ref={hoverRef} {...props}>
            {hovering && <div id="hover">Hovering!</div>}
            <div id="list">
                {props.data.message.map((dog: string, i: number) => <img data-testid={`dog-${i}`} src={dog} key={i} alt="Dog" />)}
            </div>
        </div>);
}

//WITH HOC
// export default withHover(withLoader(DogImages, "https://dog.ceo/api/breed/labrador/images/random/6"));

//WITHOUT HOC and with HOOK
export default withLoader(DogImages, "https://dog.ceo/api/breed/labrador/images/random/6");
