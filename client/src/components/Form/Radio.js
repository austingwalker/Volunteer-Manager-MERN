import React from "react";

export const Radio = props => (
  <div className="form-group">

     <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-12 pt-0">Volunteer Type (Select all that apply)</legend>
          <div className="col-sm-12">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="coach" onChange={props.onChange } id="gridRadios1" value="coach" checked/>
              <label className="form-check-label" for="gridRadios1">
                Coach
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gameday" id="gridRadios2" value="gameday"/>
              <label className="form-check-label" for="gridRadios2">
                Gameday Volunteer
              </label>
            </div>
            <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="fieldm" id="gridRadios3" value="option3" disabled/>
              <label className="form-check-label" for="gridRadios3">
                Field Maintenance
              </label>
            </div>
            <div className="form-check disabled">
              <input claclassNamess="form-check-input" type="radio" name="umpire" id="gridRadios3" value="option4" disabled/>
              <label className="form-check-label" for="gridRadios3">
                Umpire
              </label>
            </div>
            <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="teamp" id="gridRadios3" value="option5" disabled/>
              <label className="form-check-label" for="gridRadios3">
                Team Parent
              </label>
            </div>
            <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="mentor" id="gridRadios3" value="option6" disabled/>
              <label className="form-check-label" for="gridRadios3">
                Mentor
              </label>
            </div>
            <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="benefit" id="gridRadios3" value="option7" disabled/>
              <label className="form-check-label" for="gridRadios3">
                Benefit Volunteer
              </label>
            </div>
            <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="staff" id="gridRadios3" value="option8" disabled/>
              <label className="form-check-label" for="gridRadios3">
                Staff
              </label>
            </div>
          </div>
        </div>
    </fieldset>
  </div>
);