import { Component } from "react"
import { ScrollView, Text } from "react-native"
import { getManyData } from "../helpers/db_helper"

export default class ReadMany extends Component {
    state = {
        isLoading: true,
        data: [],
    }

    async componentDidMount() {
        const snapshot = await getManyData('users')
        if (snapshot != null) {
            this.setState({ isLoading: false, data: snapshot.docs.map(x => x.data()) })
        }
    }

    render() {
        return this.state.isLoading ? <Text>Loading...</Text> : (
            <ScrollView>
                {this.state.data.map((x, i) => <Text key={i}>{x.firstName} {x.middleName} {x.lastName}</Text>)}
            </ScrollView>
        )
    }
}