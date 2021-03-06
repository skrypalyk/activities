import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import { activityFormChanged } from '../actions/index'
import { addActivity } from '../actions/index'
import ActivityForm from '../components/ActivityForm'


const mapStateToProps = (state) => {
    return {
        nameValue: state.form.name,
        tagValue: state.form.tag
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitAction: (name, tag) => {
            dispatch(addActivity(name, tag));
            dispatch(push('/'));
        },
        onFormUpdate: (inputName, inputValue) => {
            dispatch(activityFormChanged(inputName, inputValue));
        }
    }
}

const NewActivity = (props) => {
    return (
        <div>
            <ActivityForm header="New activity" nameValue={props.nameValue} tagValue={props.tagValue} onSubmitAction={props.onSubmitAction} onFormUpdate={props.onFormUpdate}/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewActivity)

