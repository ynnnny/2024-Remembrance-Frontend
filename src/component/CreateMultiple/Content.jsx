import { Button, Input, View } from '@tarojs/components'
import Verification from './content/Verification'
// import { Services } from '../../serves/Services'


export default function Content(prop) {
    const {ListFunctions,name,click,setEnteredDigits}=prop
   
    return (
        <>

            <View className='content'>
                <View className='return' onClick={ListFunctions.handleBack}></View>
                <View className='content-content'>
                    <Input className='input-name' value={name} placeholder='请输入列表昵称' onInput={ListFunctions.handleInput} onBlur={ListFunctions.handleSend}></Input>
                    <Button className='button' onClick={ListFunctions.handleClickCreate} style={{ backgroundColor: click ? '#A5CCE7' : 'white' }}>创建列表</Button>
                    <Verification setEnteredDigits={setEnteredDigits} ListFunctions={ListFunctions}></Verification>
                    <View className='footnote'>
                        <View className='footnote-content'>和小伙伴一起组件列表，</View>
                        <View className='footnote-content'>创造美好回忆吧！</View>
                    </View>
                    <View className='pattern'>
                        <View className='pattern1'></View>
                        <View className='pattern2'></View>
                    </View>
                </View>
            </View>

        </>
    )
}
