gdjs.Seviye_321Code = {};
gdjs.Seviye_321Code.GDPlayerObjects1_1final = [];

gdjs.Seviye_321Code.forEachCount0_3 = 0;

gdjs.Seviye_321Code.forEachCount1_3 = 0;

gdjs.Seviye_321Code.forEachIndex3 = 0;

gdjs.Seviye_321Code.forEachObjects3 = [];

gdjs.Seviye_321Code.forEachTotalCount3 = 0;

gdjs.Seviye_321Code.GDPlayerObjects1= [];
gdjs.Seviye_321Code.GDPlayerObjects2= [];
gdjs.Seviye_321Code.GDPlayerObjects3= [];
gdjs.Seviye_321Code.GDPlatformObjects1= [];
gdjs.Seviye_321Code.GDPlatformObjects2= [];
gdjs.Seviye_321Code.GDPlatformObjects3= [];
gdjs.Seviye_321Code.GDJumpthruObjects1= [];
gdjs.Seviye_321Code.GDJumpthruObjects2= [];
gdjs.Seviye_321Code.GDJumpthruObjects3= [];
gdjs.Seviye_321Code.GDTiledGrassPlatformObjects1= [];
gdjs.Seviye_321Code.GDTiledGrassPlatformObjects2= [];
gdjs.Seviye_321Code.GDTiledGrassPlatformObjects3= [];
gdjs.Seviye_321Code.GDTiledCastlePlatformObjects1= [];
gdjs.Seviye_321Code.GDTiledCastlePlatformObjects2= [];
gdjs.Seviye_321Code.GDTiledCastlePlatformObjects3= [];
gdjs.Seviye_321Code.GDMovingPlatformObjects1= [];
gdjs.Seviye_321Code.GDMovingPlatformObjects2= [];
gdjs.Seviye_321Code.GDMovingPlatformObjects3= [];
gdjs.Seviye_321Code.GDGoLeftObjects1= [];
gdjs.Seviye_321Code.GDGoLeftObjects2= [];
gdjs.Seviye_321Code.GDGoLeftObjects3= [];
gdjs.Seviye_321Code.GDGoRightObjects1= [];
gdjs.Seviye_321Code.GDGoRightObjects2= [];
gdjs.Seviye_321Code.GDGoRightObjects3= [];
gdjs.Seviye_321Code.GDLadderObjects1= [];
gdjs.Seviye_321Code.GDLadderObjects2= [];
gdjs.Seviye_321Code.GDLadderObjects3= [];
gdjs.Seviye_321Code.GDPlayerHitBoxObjects1= [];
gdjs.Seviye_321Code.GDPlayerHitBoxObjects2= [];
gdjs.Seviye_321Code.GDPlayerHitBoxObjects3= [];
gdjs.Seviye_321Code.GDSlimeWalkObjects1= [];
gdjs.Seviye_321Code.GDSlimeWalkObjects2= [];
gdjs.Seviye_321Code.GDSlimeWalkObjects3= [];
gdjs.Seviye_321Code.GDFlyObjects1= [];
gdjs.Seviye_321Code.GDFlyObjects2= [];
gdjs.Seviye_321Code.GDFlyObjects3= [];
gdjs.Seviye_321Code.GDCloudObjects1= [];
gdjs.Seviye_321Code.GDCloudObjects2= [];
gdjs.Seviye_321Code.GDCloudObjects3= [];
gdjs.Seviye_321Code.GDBackgroundObjectsObjects1= [];
gdjs.Seviye_321Code.GDBackgroundObjectsObjects2= [];
gdjs.Seviye_321Code.GDBackgroundObjectsObjects3= [];
gdjs.Seviye_321Code.GDScoreObjects1= [];
gdjs.Seviye_321Code.GDScoreObjects2= [];
gdjs.Seviye_321Code.GDScoreObjects3= [];
gdjs.Seviye_321Code.GDCoinObjects1= [];
gdjs.Seviye_321Code.GDCoinObjects2= [];
gdjs.Seviye_321Code.GDCoinObjects3= [];
gdjs.Seviye_321Code.GDCoinIconObjects1= [];
gdjs.Seviye_321Code.GDCoinIconObjects2= [];
gdjs.Seviye_321Code.GDCoinIconObjects3= [];
gdjs.Seviye_321Code.GDLeftButtonObjects1= [];
gdjs.Seviye_321Code.GDLeftButtonObjects2= [];
gdjs.Seviye_321Code.GDLeftButtonObjects3= [];
gdjs.Seviye_321Code.GDRightButtonObjects1= [];
gdjs.Seviye_321Code.GDRightButtonObjects2= [];
gdjs.Seviye_321Code.GDRightButtonObjects3= [];
gdjs.Seviye_321Code.GDJumpButtonObjects1= [];
gdjs.Seviye_321Code.GDJumpButtonObjects2= [];
gdjs.Seviye_321Code.GDJumpButtonObjects3= [];
gdjs.Seviye_321Code.GDArrowButtonsBgObjects1= [];
gdjs.Seviye_321Code.GDArrowButtonsBgObjects2= [];
gdjs.Seviye_321Code.GDArrowButtonsBgObjects3= [];
gdjs.Seviye_321Code.GDBlackMaskObjects1= [];
gdjs.Seviye_321Code.GDBlackMaskObjects2= [];
gdjs.Seviye_321Code.GDBlackMaskObjects3= [];

gdjs.Seviye_321Code.conditionTrue_0 = {val:false};
gdjs.Seviye_321Code.condition0IsTrue_0 = {val:false};
gdjs.Seviye_321Code.condition1IsTrue_0 = {val:false};
gdjs.Seviye_321Code.condition2IsTrue_0 = {val:false};
gdjs.Seviye_321Code.condition3IsTrue_0 = {val:false};
gdjs.Seviye_321Code.conditionTrue_1 = {val:false};
gdjs.Seviye_321Code.condition0IsTrue_1 = {val:false};
gdjs.Seviye_321Code.condition1IsTrue_1 = {val:false};
gdjs.Seviye_321Code.condition2IsTrue_1 = {val:false};
gdjs.Seviye_321Code.condition3IsTrue_1 = {val:false};


gdjs.Seviye_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Seviye_321Code.GDPlayerHitBoxObjects1, gdjs.Seviye_321Code.GDPlayerHitBoxObjects2);


gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.Seviye_321Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDPlayerHitBoxObjects2[k] = gdjs.Seviye_321Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Seviye_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Seviye_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.Seviye_321Code.GDPlayerHitBoxObjects1 */

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[k] = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Seviye_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


};gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.Seviye_321Code.GDGoLeftObjects1});gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.Seviye_321Code.GDMovingPlatformObjects1});gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.Seviye_321Code.GDGoRightObjects1});gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.Seviye_321Code.GDMovingPlatformObjects1});gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.Seviye_321Code.GDGoLeftObjects1});gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Seviye_95321Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.Seviye_321Code.GDSlimeWalkObjects1, "Fly": gdjs.Seviye_321Code.GDFlyObjects1});gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.Seviye_321Code.GDGoRightObjects1});gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Seviye_95321Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.Seviye_321Code.GDSlimeWalkObjects1, "Fly": gdjs.Seviye_321Code.GDFlyObjects1});gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.Seviye_321Code.GDPlayerHitBoxObjects1});gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Seviye_95321Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.Seviye_321Code.GDSlimeWalkObjects1, "Fly": gdjs.Seviye_321Code.GDFlyObjects1});gdjs.Seviye_321Code.eventsList1 = function(runtimeScene) {

};gdjs.Seviye_321Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Seviye_321Code.GDFlyObjects2 */
/* Reuse gdjs.Seviye_321Code.GDSlimeWalkObjects2 */

gdjs.Seviye_321Code.forEachTotalCount3 = 0;
gdjs.Seviye_321Code.forEachObjects3.length = 0;
gdjs.Seviye_321Code.forEachCount0_3 = gdjs.Seviye_321Code.GDSlimeWalkObjects2.length;
gdjs.Seviye_321Code.forEachTotalCount3 += gdjs.Seviye_321Code.forEachCount0_3;
gdjs.Seviye_321Code.forEachObjects3.push.apply(gdjs.Seviye_321Code.forEachObjects3,gdjs.Seviye_321Code.GDSlimeWalkObjects2);
gdjs.Seviye_321Code.forEachCount1_3 = gdjs.Seviye_321Code.GDFlyObjects2.length;
gdjs.Seviye_321Code.forEachTotalCount3 += gdjs.Seviye_321Code.forEachCount1_3;
gdjs.Seviye_321Code.forEachObjects3.push.apply(gdjs.Seviye_321Code.forEachObjects3,gdjs.Seviye_321Code.GDFlyObjects2);
for(gdjs.Seviye_321Code.forEachIndex3 = 0;gdjs.Seviye_321Code.forEachIndex3 < gdjs.Seviye_321Code.forEachTotalCount3;++gdjs.Seviye_321Code.forEachIndex3) {
gdjs.Seviye_321Code.GDFlyObjects3.length = 0;

gdjs.Seviye_321Code.GDSlimeWalkObjects3.length = 0;


if (gdjs.Seviye_321Code.forEachIndex3 < gdjs.Seviye_321Code.forEachCount0_3) {
    gdjs.Seviye_321Code.GDSlimeWalkObjects3.push(gdjs.Seviye_321Code.forEachObjects3[gdjs.Seviye_321Code.forEachIndex3]);
}
else if (gdjs.Seviye_321Code.forEachIndex3 < gdjs.Seviye_321Code.forEachCount0_3+gdjs.Seviye_321Code.forEachCount1_3) {
    gdjs.Seviye_321Code.GDFlyObjects3.push(gdjs.Seviye_321Code.forEachObjects3[gdjs.Seviye_321Code.forEachIndex3]);
}
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(50);
}}
}

}


};gdjs.Seviye_321Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Seviye_321Code.GDPlayerHitBoxObjects1, gdjs.Seviye_321Code.GDPlayerHitBoxObjects2);


gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDPlayerHitBoxObjects2[k] = gdjs.Seviye_321Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Seviye_321Code.GDFlyObjects1, gdjs.Seviye_321Code.GDFlyObjects2);

/* Reuse gdjs.Seviye_321Code.GDPlayerHitBoxObjects2 */
gdjs.copyArray(gdjs.Seviye_321Code.GDSlimeWalkObjects1, gdjs.Seviye_321Code.GDSlimeWalkObjects2);

{for(var i = 0, len = gdjs.Seviye_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDSlimeWalkObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Seviye_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDSlimeWalkObjects2[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects2[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.Seviye_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}{for(var i = 0, len = gdjs.Seviye_321Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Seviye_321Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}
{ //Subevents
gdjs.Seviye_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Seviye_321Code.GDFlyObjects1 */
/* Reuse gdjs.Seviye_321Code.GDPlayerHitBoxObjects1 */
/* Reuse gdjs.Seviye_321Code.GDSlimeWalkObjects1 */

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i].getY() >= (( gdjs.Seviye_321Code.GDFlyObjects1.length === 0 ) ? (( gdjs.Seviye_321Code.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.Seviye_321Code.GDSlimeWalkObjects1[0].getPointY("")) :gdjs.Seviye_321Code.GDFlyObjects1[0].getPointY("")) - (gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i].getHeight()) + (( gdjs.Seviye_321Code.GDFlyObjects1.length === 0 ) ? (( gdjs.Seviye_321Code.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.Seviye_321Code.GDSlimeWalkObjects1[0].getHeight()) :gdjs.Seviye_321Code.GDFlyObjects1[0].getHeight()) / 2 ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[k] = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
}

}


};gdjs.Seviye_321Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Seviye_321Code.GDFlyObjects1, gdjs.Seviye_321Code.GDFlyObjects2);

gdjs.copyArray(gdjs.Seviye_321Code.GDSlimeWalkObjects1, gdjs.Seviye_321Code.GDSlimeWalkObjects2);


gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.Seviye_321Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDSlimeWalkObjects2[k] = gdjs.Seviye_321Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDFlyObjects2[i].getVariableNumber(gdjs.Seviye_321Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDFlyObjects2[k] = gdjs.Seviye_321Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDFlyObjects2.length = k;}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Seviye_321Code.GDFlyObjects2 */
/* Reuse gdjs.Seviye_321Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects2[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.Seviye_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Seviye_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDSlimeWalkObjects2[i].flipX(false);
}
for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.Seviye_321Code.GDFlyObjects1, gdjs.Seviye_321Code.GDFlyObjects2);

gdjs.copyArray(gdjs.Seviye_321Code.GDSlimeWalkObjects1, gdjs.Seviye_321Code.GDSlimeWalkObjects2);


gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.Seviye_321Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDSlimeWalkObjects2[k] = gdjs.Seviye_321Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDFlyObjects2[i].getVariableNumber(gdjs.Seviye_321Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDFlyObjects2[k] = gdjs.Seviye_321Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDFlyObjects2.length = k;}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Seviye_321Code.GDFlyObjects2 */
/* Reuse gdjs.Seviye_321Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects2[i].addForce(300, 0, 0);
}
}{for(var i = 0, len = gdjs.Seviye_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Seviye_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDSlimeWalkObjects2[i].flipX(true);
}
for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects2[i].flipX(true);
}
}}

}


{



}


{

/* Reuse gdjs.Seviye_321Code.GDFlyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Seviye_321Code.GDPlayerHitBoxObjects1);
/* Reuse gdjs.Seviye_321Code.GDSlimeWalkObjects1 */

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDPlayerHitBoxObjects1Objects, gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Seviye_95321Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Seviye_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Seviye_321Code.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.Seviye_321Code.GDFlyObjects1 */
/* Reuse gdjs.Seviye_321Code.GDSlimeWalkObjects1 */

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDSlimeWalkObjects1[i].getOpacity() == 0 ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDSlimeWalkObjects1[k] = gdjs.Seviye_321Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDFlyObjects1[i].getOpacity() == 0 ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDFlyObjects1[k] = gdjs.Seviye_321Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDFlyObjects1.length = k;}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Seviye_321Code.GDFlyObjects1 */
/* Reuse gdjs.Seviye_321Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.Seviye_321Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDSlimeWalkObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.Seviye_321Code.GDPlayerHitBoxObjects1});gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Seviye_321Code.GDCoinObjects1});gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDLeftButtonObjects1Objects = Hashtable.newFrom({"LeftButton": gdjs.Seviye_321Code.GDLeftButtonObjects1});gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDRightButtonObjects1Objects = Hashtable.newFrom({"RightButton": gdjs.Seviye_321Code.GDRightButtonObjects1});gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.Seviye_321Code.GDJumpButtonObjects1});gdjs.Seviye_321Code.eventsList6 = function(runtimeScene) {

{


{
}

}


{


{
}

}


{


{
}

}


};gdjs.Seviye_321Code.eventsList7 = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Pause");
}
{ //Subevents
gdjs.Seviye_321Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Seviye_321Code.eventsList8 = function(runtimeScene) {

{


gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Seviye_321Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Seviye_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Seviye_321Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDPlayerObjects1[i].setPosition((( gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[0].getPointX("")) - 12,(( gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[0].getPointY("")));
}
}}

}


{



}


{

gdjs.Seviye_321Code.GDPlayerObjects1.length = 0;


gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
gdjs.Seviye_321Code.condition1IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
}if ( gdjs.Seviye_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Seviye_321Code.conditionTrue_1 = gdjs.Seviye_321Code.condition1IsTrue_0;
gdjs.Seviye_321Code.GDPlayerObjects1_1final.length = 0;gdjs.Seviye_321Code.condition0IsTrue_1.val = false;
gdjs.Seviye_321Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Seviye_321Code.GDPlayerObjects2);
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDPlayerObjects2[i].getAnimation() == 0 ) {
        gdjs.Seviye_321Code.condition0IsTrue_1.val = true;
        gdjs.Seviye_321Code.GDPlayerObjects2[k] = gdjs.Seviye_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDPlayerObjects2.length = k;if( gdjs.Seviye_321Code.condition0IsTrue_1.val ) {
    gdjs.Seviye_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Seviye_321Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Seviye_321Code.GDPlayerObjects1_1final.indexOf(gdjs.Seviye_321Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Seviye_321Code.GDPlayerObjects1_1final.push(gdjs.Seviye_321Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Seviye_321Code.GDPlayerObjects2);
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDPlayerObjects2[i].getAnimation() == 2 ) {
        gdjs.Seviye_321Code.condition1IsTrue_1.val = true;
        gdjs.Seviye_321Code.GDPlayerObjects2[k] = gdjs.Seviye_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDPlayerObjects2.length = k;if( gdjs.Seviye_321Code.condition1IsTrue_1.val ) {
    gdjs.Seviye_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Seviye_321Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Seviye_321Code.GDPlayerObjects1_1final.indexOf(gdjs.Seviye_321Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Seviye_321Code.GDPlayerObjects1_1final.push(gdjs.Seviye_321Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Seviye_321Code.GDPlayerObjects1_1final, gdjs.Seviye_321Code.GDPlayerObjects1);
}
}
}}
if (gdjs.Seviye_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Seviye_321Code.GDPlayerHitBoxObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[k] = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Seviye_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Seviye_321Code.GDPlayerHitBoxObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[k] = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Seviye_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Seviye_321Code.GDPlayerHitBoxObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[k] = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Seviye_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Seviye_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Seviye_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Seviye_321Code.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Seviye_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Seviye_321Code.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.Seviye_321Code.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.Seviye_321Code.GDGoRightObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Seviye_321Code.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDGoRightObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.Seviye_321Code.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.Seviye_321Code.GDMovingPlatformObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDGoLeftObjects1Objects, gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Seviye_321Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.Seviye_321Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Seviye_321Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDMovingPlatformObjects1[i].addForce(-(150), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.Seviye_321Code.GDGoRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.Seviye_321Code.GDMovingPlatformObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDGoRightObjects1Objects, gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Seviye_321Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.Seviye_321Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Seviye_321Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDMovingPlatformObjects1[i].addForce(150, 0, 1);
}
}}

}


{



}


{



}


{


gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.Seviye_321Code.GDFlyObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.Seviye_321Code.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.Seviye_321Code.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.Seviye_321Code.GDSlimeWalkObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDGoLeftObjects1Objects, gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Seviye_95321Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Seviye_321Code.GDFlyObjects1 */
/* Reuse gdjs.Seviye_321Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.Seviye_321Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDSlimeWalkObjects1[i].returnVariable(gdjs.Seviye_321Code.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects1[i].returnVariable(gdjs.Seviye_321Code.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.Seviye_321Code.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.Seviye_321Code.GDGoRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.Seviye_321Code.GDSlimeWalkObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDGoRightObjects1Objects, gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Seviye_95321Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Seviye_321Code.GDFlyObjects1 */
/* Reuse gdjs.Seviye_321Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.Seviye_321Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDSlimeWalkObjects1[i].returnVariable(gdjs.Seviye_321Code.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects1[i].returnVariable(gdjs.Seviye_321Code.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.Seviye_321Code.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.Seviye_321Code.GDSlimeWalkObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDSlimeWalkObjects1[i].getAnimation() == 0 ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDSlimeWalkObjects1[k] = gdjs.Seviye_321Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDFlyObjects1[i].getAnimation() == 0 ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDFlyObjects1[k] = gdjs.Seviye_321Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDFlyObjects1.length = k;}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Seviye_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.Seviye_321Code.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.Seviye_321Code.GDSlimeWalkObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
gdjs.Seviye_321Code.condition1IsTrue_0.val = false;
gdjs.Seviye_321Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDSlimeWalkObjects1[i].getAnimation() == 1 ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDSlimeWalkObjects1[k] = gdjs.Seviye_321Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDFlyObjects1[i].getAnimation() == 1 ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDFlyObjects1[k] = gdjs.Seviye_321Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDFlyObjects1.length = k;}if ( gdjs.Seviye_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Seviye_321Code.condition1IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDSlimeWalkObjects1[k] = gdjs.Seviye_321Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDFlyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Seviye_321Code.condition1IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDFlyObjects1[k] = gdjs.Seviye_321Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDFlyObjects1.length = k;}if ( gdjs.Seviye_321Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.Seviye_321Code.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Seviye_321Code.condition2IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDSlimeWalkObjects1[k] = gdjs.Seviye_321Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.Seviye_321Code.GDFlyObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Seviye_321Code.condition2IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDFlyObjects1[k] = gdjs.Seviye_321Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDFlyObjects1.length = k;}}
}
if (gdjs.Seviye_321Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Seviye_321Code.GDFlyObjects1 */
/* Reuse gdjs.Seviye_321Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.Seviye_321Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDSlimeWalkObjects1[i].activateBehavior("PlatformerObject", false);
}
for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.Seviye_321Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDSlimeWalkObjects1[i].setOpacity(gdjs.Seviye_321Code.GDSlimeWalkObjects1[i].getOpacity() - (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.Seviye_321Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDFlyObjects1[i].setOpacity(gdjs.Seviye_321Code.GDFlyObjects1[i].getOpacity() - (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Seviye_321Code.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Seviye_321Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Seviye_321Code.GDPlayerHitBoxObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
gdjs.Seviye_321Code.condition1IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDPlayerHitBoxObjects1Objects, gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDCoinObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Seviye_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDCoinObjects1[i].getOpacity() == 255 ) {
        gdjs.Seviye_321Code.condition1IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDCoinObjects1[k] = gdjs.Seviye_321Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDCoinObjects1.length = k;}}
if (gdjs.Seviye_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Seviye_321Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Seviye_321Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDCoinObjects1[i].setOpacity(254);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Seviye_321Code.GDCoinObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDCoinObjects1[i].getOpacity() < 255 ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDCoinObjects1[k] = gdjs.Seviye_321Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDCoinObjects1.length = k;}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Seviye_321Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Seviye_321Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDCoinObjects1[i].setOpacity(gdjs.Seviye_321Code.GDCoinObjects1[i].getOpacity() - (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Seviye_321Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDCoinObjects1[i].addForce(0, -(30), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Seviye_321Code.GDCoinObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Seviye_321Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.Seviye_321Code.GDCoinObjects1[i].getOpacity() == 0 ) {
        gdjs.Seviye_321Code.condition0IsTrue_0.val = true;
        gdjs.Seviye_321Code.GDCoinObjects1[k] = gdjs.Seviye_321Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.Seviye_321Code.GDCoinObjects1.length = k;}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Seviye_321Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Seviye_321Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Seviye_321Code.GDScoreObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{



}


{


gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ArrowButtonsBg"), gdjs.Seviye_321Code.GDArrowButtonsBgObjects1);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Seviye_321Code.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.Seviye_321Code.GDLeftButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.Seviye_321Code.GDRightButtonObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDLeftButtonObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDLeftButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.Seviye_321Code.GDRightButtonObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDRightButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.Seviye_321Code.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDJumpButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.Seviye_321Code.GDArrowButtonsBgObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDArrowButtonsBgObjects1[i].hide();
}
}}

}


{


gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.Seviye_321Code.GDLeftButtonObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Seviye_321Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.Seviye_321Code.GDRightButtonObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Seviye_321Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Seviye_321Code.GDJumpButtonObjects1);

gdjs.Seviye_321Code.condition0IsTrue_0.val = false;
{
gdjs.Seviye_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Seviye_321Code.mapOfGDgdjs_46Seviye_95321Code_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Seviye_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Seviye_321Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Seviye_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.Seviye_321Code.eventsList7(runtimeScene);
}


};

gdjs.Seviye_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Seviye_321Code.GDPlayerObjects1.length = 0;
gdjs.Seviye_321Code.GDPlayerObjects2.length = 0;
gdjs.Seviye_321Code.GDPlayerObjects3.length = 0;
gdjs.Seviye_321Code.GDPlatformObjects1.length = 0;
gdjs.Seviye_321Code.GDPlatformObjects2.length = 0;
gdjs.Seviye_321Code.GDPlatformObjects3.length = 0;
gdjs.Seviye_321Code.GDJumpthruObjects1.length = 0;
gdjs.Seviye_321Code.GDJumpthruObjects2.length = 0;
gdjs.Seviye_321Code.GDJumpthruObjects3.length = 0;
gdjs.Seviye_321Code.GDTiledGrassPlatformObjects1.length = 0;
gdjs.Seviye_321Code.GDTiledGrassPlatformObjects2.length = 0;
gdjs.Seviye_321Code.GDTiledGrassPlatformObjects3.length = 0;
gdjs.Seviye_321Code.GDTiledCastlePlatformObjects1.length = 0;
gdjs.Seviye_321Code.GDTiledCastlePlatformObjects2.length = 0;
gdjs.Seviye_321Code.GDTiledCastlePlatformObjects3.length = 0;
gdjs.Seviye_321Code.GDMovingPlatformObjects1.length = 0;
gdjs.Seviye_321Code.GDMovingPlatformObjects2.length = 0;
gdjs.Seviye_321Code.GDMovingPlatformObjects3.length = 0;
gdjs.Seviye_321Code.GDGoLeftObjects1.length = 0;
gdjs.Seviye_321Code.GDGoLeftObjects2.length = 0;
gdjs.Seviye_321Code.GDGoLeftObjects3.length = 0;
gdjs.Seviye_321Code.GDGoRightObjects1.length = 0;
gdjs.Seviye_321Code.GDGoRightObjects2.length = 0;
gdjs.Seviye_321Code.GDGoRightObjects3.length = 0;
gdjs.Seviye_321Code.GDLadderObjects1.length = 0;
gdjs.Seviye_321Code.GDLadderObjects2.length = 0;
gdjs.Seviye_321Code.GDLadderObjects3.length = 0;
gdjs.Seviye_321Code.GDPlayerHitBoxObjects1.length = 0;
gdjs.Seviye_321Code.GDPlayerHitBoxObjects2.length = 0;
gdjs.Seviye_321Code.GDPlayerHitBoxObjects3.length = 0;
gdjs.Seviye_321Code.GDSlimeWalkObjects1.length = 0;
gdjs.Seviye_321Code.GDSlimeWalkObjects2.length = 0;
gdjs.Seviye_321Code.GDSlimeWalkObjects3.length = 0;
gdjs.Seviye_321Code.GDFlyObjects1.length = 0;
gdjs.Seviye_321Code.GDFlyObjects2.length = 0;
gdjs.Seviye_321Code.GDFlyObjects3.length = 0;
gdjs.Seviye_321Code.GDCloudObjects1.length = 0;
gdjs.Seviye_321Code.GDCloudObjects2.length = 0;
gdjs.Seviye_321Code.GDCloudObjects3.length = 0;
gdjs.Seviye_321Code.GDBackgroundObjectsObjects1.length = 0;
gdjs.Seviye_321Code.GDBackgroundObjectsObjects2.length = 0;
gdjs.Seviye_321Code.GDBackgroundObjectsObjects3.length = 0;
gdjs.Seviye_321Code.GDScoreObjects1.length = 0;
gdjs.Seviye_321Code.GDScoreObjects2.length = 0;
gdjs.Seviye_321Code.GDScoreObjects3.length = 0;
gdjs.Seviye_321Code.GDCoinObjects1.length = 0;
gdjs.Seviye_321Code.GDCoinObjects2.length = 0;
gdjs.Seviye_321Code.GDCoinObjects3.length = 0;
gdjs.Seviye_321Code.GDCoinIconObjects1.length = 0;
gdjs.Seviye_321Code.GDCoinIconObjects2.length = 0;
gdjs.Seviye_321Code.GDCoinIconObjects3.length = 0;
gdjs.Seviye_321Code.GDLeftButtonObjects1.length = 0;
gdjs.Seviye_321Code.GDLeftButtonObjects2.length = 0;
gdjs.Seviye_321Code.GDLeftButtonObjects3.length = 0;
gdjs.Seviye_321Code.GDRightButtonObjects1.length = 0;
gdjs.Seviye_321Code.GDRightButtonObjects2.length = 0;
gdjs.Seviye_321Code.GDRightButtonObjects3.length = 0;
gdjs.Seviye_321Code.GDJumpButtonObjects1.length = 0;
gdjs.Seviye_321Code.GDJumpButtonObjects2.length = 0;
gdjs.Seviye_321Code.GDJumpButtonObjects3.length = 0;
gdjs.Seviye_321Code.GDArrowButtonsBgObjects1.length = 0;
gdjs.Seviye_321Code.GDArrowButtonsBgObjects2.length = 0;
gdjs.Seviye_321Code.GDArrowButtonsBgObjects3.length = 0;
gdjs.Seviye_321Code.GDBlackMaskObjects1.length = 0;
gdjs.Seviye_321Code.GDBlackMaskObjects2.length = 0;
gdjs.Seviye_321Code.GDBlackMaskObjects3.length = 0;

gdjs.Seviye_321Code.eventsList8(runtimeScene);
return;

}

gdjs['Seviye_321Code'] = gdjs.Seviye_321Code;
