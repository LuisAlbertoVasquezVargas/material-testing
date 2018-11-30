import React, { Component } from "react";
import Button from "@material/react-button";
import MaterialIcon from "@material/react-material-icon";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemMeta
} from "@material/react-list";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <List className="mdc-list" avatarList twoLine>
          <ListItem className="mdc-list-item">
            <ListItemGraphic
              className="mdc-list-item__graphic"
              graphic={
                <MaterialIcon 
                  className="mdc-icon-button mdc-button__icon" 
                  icon="delete_forever" 
                />
              }
            />
            <ListItemText
              className="mdc-list-item__text"
              primaryText="Lorem ipsum culpa consectetur enim do duis in qui sit laborum sunt."
              secondaryText="Lorem ipsum culpa consectetur enim do duis in qui sit laborum sunt."
            />
            <ListItemMeta
              className="mdc-list-item__meta mdc-list-item__graphic"
              meta={
                <MaterialIcon 
                  className="mdc-icon-button mdc-button__icon" 
                  icon="delete_forever" 
                />
              }
            />
          </ListItem>
          <ListItem className="mdc-list-item">
            <ListItemGraphic
              className="mdc-list-item__graphic"
              graphic={
                <MaterialIcon 
                  className="mdc-icon-button" 
                  icon="delete_forever"
                />
              }
            />
            <ListItemText
              className="mdc-list-item__text"
              primaryText="Lorem ipsum et in ullamco ut labore est sunt nulla aliquip eu adipisicing officia irure ut qui."
              secondaryText="Lorem ipsum et in ullamco ut labore est sunt nulla aliquip eu adipisicing officia irure ut qui."
            />
          </ListItem>
        </List>
        <Button
          className="mdc-button"
          icon={
            <MaterialIcon 
              className="mdc-icon-button" 
              icon="delete_forever"
            />
          }
        >
        </Button>
      </div>
    );
  }
}

export default App;
