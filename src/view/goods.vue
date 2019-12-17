<template>
    <div>
       
        <mypic>
            <p slot="p" v-for="item in data1">{{item}}</p>
			<p slot="z">&yen;999<sub>起</sub></p>
        </mypic>

        <mydesc></mydesc>

        <mylunb></mylunb>
        
        <router-view/>
    </div>
</template>

<script>

import mypic from '@/components/mypic'
import mydesc from '@/components/mydesc'
import mylunb from '@/components/mylunb'
export default {
    components:{
        mypic,
        mydesc,
        mylunb
    },
    data(){
        return{
            data1:['Redmi Note8','千元4800万四摄','4800万超清四摄 | 高通骁龙665 | 小金刚品质保证'],
            data2:['© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号','（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 医疗器械公告','增值电信业务许可证 网络食品经营备案（京）【2018】WLSPJYBAHF-12 食品经营许可证','违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试 ']
        }
    }
}
</script>

<style>

</style>
