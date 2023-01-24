import { View, Text } from 'react-native'
import React from 'react'

const TableRow = ({
  rowItems
}) => {
  return (
    <View style={{backgroundColor: "white", margin: 16, padding: 16, flexDirection: "row", alignItems:"center", borderRadius: 8, justifyContent: 'center', }}>
      {
        rowItems.map((item)=> (
          <View style={{ width: item.width, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
            {item.column ? item.column : <Text>{item.name}</Text>}
          </View>
        ))
      }
    </View>
  )
}

export default TableRow