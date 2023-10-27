import React from 'react';
import { Activity } from '../../../models/activity';
import { Button, Item, ItemDescription, ItemExtra, Label, Segment } from 'semantic-ui-react';

interface Props {
    activities: Activity[];
    selectActivity: (id:string) => void;
    delectActivity: (id:string) => void;
}

export default function ActivityList({activities, selectActivity, delectActivity}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <ItemDescription>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content='View' color='blue'/>
                                <Button onClick={() => delectActivity(activity.id)}  floated='right' content='Delete' color='red'/>
                                <Label basic content={activity.category}/>
                            </ItemExtra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}