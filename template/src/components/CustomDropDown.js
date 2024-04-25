import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/hooks';
import { CustomModal } from '@/components';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';

const CustomDropDown = ({ headingText, placeholder, data, type, onSelect }) => {
  const { Images, Layout, Gutters, Colors, Fonts } = useTheme()
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState('')
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const ModalUI = ({ data, heading }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[
          Layout.screenWidth,
          Gutters.smallRadius,
          Gutters.darkShadow,
          { backgroundColor: Colors.white, zIndex: 2, },
        ]}>
        <View style={[Layout.fullWidth]}>
          <View style={[Layout.alignItemsCenter]}>
            <Text
              style={[
                Fonts.nunito18,
                Fonts.semiboldWeight,
                Gutters.xTinyVMargin
              ]}>
              {heading}
            </Text>
          </View>
          <View style={[Gutters.regularBMargin]}>
            {data?.map(
              (item) => <TouchableOpacity
                onPress={() => {
                  setSelected(item?.value)
                  setModalVisible(false)
                }} style={[Layout.fullWidth, Gutters.tinyVPadding, Gutters.smallHPadding, Gutters.littleBM]}>
                <Text style={[Fonts.nunito14, Fonts.regularWeight]}>{item?.value}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const ModalView = () => {
    return <>
      {type == 'date-picker' ? <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          onSelect({ date: date })
          setSelected(moment(date).format("dddd, MMMM Do YYYY"))
        }}
        onCancel={() => {
          setOpen(false)
        }}
      /> :
        <CustomModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={[
              Layout.fullSize,
              Layout.center,
              { backgroundColor: Colors.blur, zIndex: 1 },
            ]}>
            <ModalUI data={data} heading={placeholder} />
          </TouchableOpacity>
          <ModalUI />
        </CustomModal>}
    </>
  }


  return (
    <View>
      <ModalView />
      <View style={[Layout.screenWidth]}>
        <Text style={[Fonts.nunito14, Fonts.regularWeight, Gutters.littleBMargin]}>{headingText}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => type == 'date-picker' ? setOpen(true) : setModalVisible(true)}
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
            Gutters.borderWidth,
            Gutters.smallRadius,
            Gutters.smallHPadding,
            { height: 48, backgroundColor: Colors.background, borderColor: Colors.grey_E7E9F5 }

          ]}
        >
          <View>
            <Text style={[Fonts.nunito14, Fonts.regularWeight]}>{!!selected ? selected : placeholder}</Text>
          </View>
          <View>
            <Images.svg.ArrowDown.default />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDropDown