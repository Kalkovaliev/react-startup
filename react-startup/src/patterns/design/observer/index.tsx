import { Button, FormControlLabel, Switch } from "@material-ui/core";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import Observable from "./components/observable";

const Observer = () => {

    const observable = new Observable();

    const handleClick = () => {
        observable.notify("User clicked button!");
    }

    const handleToggle = () => {
        observable.notify("User toggled switch!");
    }

    const logger = (data: any) => {
        console.log(`${Date.now()} ${data}`);
    }

    const toastify = (data: any) => {
        toast(data, {
            position: toast.POSITION.BOTTOM_RIGHT,
            closeButton: false,
            autoClose: 2000
        });
    }

    observable.subsribe(logger);
    observable.subsribe(toastify);


    return (
        <div data-testid="observer">
            <h2>Observer Pattern</h2>
            <p>Use observables to notify subscribers when an event occurs</p>
            <p>With the observer pattern, we can subscribe certain objects, the observers, to another object, called the observable. Whenever an event occurs, the observable notifies all its observers!</p>
            <p>An observable object usually contains 3 important parts:
                observers: an array of observers that will get notified whenever a specific event occurs
                subscribe(): a method in order to add observers to the observers list
                unsubscribe(): a method in order to remove observers from the observers list
                notify(): a method to notify all observers whenever a specific event occurs
            </p>
            <Button variant="contained" onClick={() => handleClick()}>Click me!</Button>
            <FormControlLabel label="Toggle Me!" control={<Switch name="" onChange={() => handleToggle()} />} />
            <ToastContainer />

        </div>
    );
}

export default Observer;
