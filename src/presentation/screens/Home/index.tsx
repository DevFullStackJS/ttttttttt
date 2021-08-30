import React, {useEffect, useState} from 'react';
import {View, RefreshControl, Text, Image, Animated} from 'react-native';
import {PageContainer} from '../../layout/PageContainer';

import {connect} from 'react-redux';
import mapDispatchToProps from '../../../services/redux/mapDispatchToProps';
import mapStateToProps from '../../../services/redux/mapStateToProps';

import {icons, images} from '../../resources/constants';
import {styles} from './styles';
import style from '../../style';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {useWidthHeight} from '../../../hooks/dimension';
import {ButtonComponent} from '../../components/Inputs/Button';

export const Home = (_props: any) => {
  const [refreshing, setRefreshing] = useState(false);

  const {width} = useWidthHeight();
  useEffect(() => {}, []);

  const init = () => {
    setRefreshing(true);
  };

  const logos = {
    airbnb: icons.airbnb?.default,
    fedEx: icons.fedEx?.default,
    google: icons.google?.default,
    hubspot: icons.hubspot?.default,
    microsoft: icons.microsoft?.default,
  };

  const position = new Animated.Value(6);

  const renderDotsView = (array, position) => {
    return (
      <View style={{flexDirection: 'row'}}>
        {array.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 5,
                width: 5,
                backgroundColor: '#595959',
                margin: 2,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    );
  };

  // const handleScroll = event => {
  //   const positionX = event.nativeEvent.contentOffset.x;
  //   const positionY = event.nativeEvent.contentOffset.y;
  //   console.log({positionX, positionY});
  // };

  return (
    <View>
      <PageContainer
        refresh={<RefreshControl refreshing={refreshing} onRefresh={init} />}>
        <View style={styles.containers}>
          <View style={styles.containt}>
            <View
              style={[
                styles.v1,
                {
                  width: width > 1140 ? 1100 / 3 : width,
                  height: width > 1140 ? 1100 / 3 : width,
                },
              ]}>
              <View style={styles.vtitle}>
                <Text style={styles.title}>
                  Trouver facilement les services{' '}
                </Text>
              </View>
              <View style={styles.vdescription}>
                <Text style={styles.description} numberOfLines={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  erat nibh tristique ipsum.
                </Text>
              </View>
              <Text style={styles.titleInput}>Saisissez le service</Text>
              <View style={styles.vInput}>
                <TextInput
                  style={styles.searcInput}
                  onChange={() => {}}
                  placeholder="ex : Logo Design"
                />
                <ButtonComponent title="Trouver" onPress={() => {}} />
              </View>
              <View style={styles.vplus}>
                <Image source={icons.stroke1?.default} style={styles.stroke1} />
                <Image source={icons.stroke3?.default} style={styles.stroke3} />
                <Text style={styles.tplus}>Lire plus</Text>
              </View>
            </View>
            <View style={styles.v2}>
              <Image
                source={images.hero?.default}
                resizeMode="cover"
                style={{
                  width: width > 1140 ? 1100 / 2 : width,
                  height: width > 1140 ? 1100 / 2.5 : width,
                }}
              />
            </View>
          </View>
          <View style={styles.vlogos}>
            {Object.values(logos).map(value => (
              <View key={value} style={styles.vItemlogos}>
                <TouchableOpacity>
                  <Image
                    source={value}
                    // resizeMode="cover"
                    style={{
                      width:
                        width > 1140 ? (logos.microsoft ? 110 : 90) : width / 6,
                      height: value === logos.microsoft ? 19 : 30,
                    }}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View style={styles.section1}>
            <View style={styles.containt_s1}>
              <View style={styles.containt_s11}>
                <View style={{marginRight: 15}}>
                  <Image
                    source={images.image1?.default}
                    resizeMode="cover"
                    style={{
                      width: width > 1140 ? 227 : width / 4,
                      height: width > 1140 ? 315 : width,
                    }}
                  />
                </View>
                <View style={[style.vertical]}>
                  <View />
                  <Image
                    source={images.image2?.default}
                    resizeMode="cover"
                    style={{
                      width: width > 1140 ? 227 : width / 4,
                      height: width > 1140 ? 1100 / 4 : width,
                    }}
                  />
                </View>
              </View>
              <View style={styles.containt_s11}>
                <View style={{marginRight: 15}}>
                  <Image
                    source={images.image3?.default}
                    resizeMode="cover"
                    style={{
                      width: width > 1140 ? 140 : width / 4,
                      height: width > 1140 ? 1100 / 4 : width,
                    }}
                  />
                </View>
                <View>
                  <Image
                    source={images.image4?.default}
                    resizeMode="cover"
                    style={{
                      width: width > 1140 ? 310 : width / 4,
                      height: width > 1140 ? 350 : width,
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.containt_s2}>
              <View style={styles.containt_s2_v1}>
                <Text style={styles.containt_s2_v1_text}>
                  Services les plus recherchées
                </Text>
              </View>
              <View style={styles.containt_s2_v2}>
                <Text style={styles.containt_s2_v1_text2} numberOfLines={3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  erat nibh tristique ipsum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed erat nibh tristique ipsum.
                </Text>
              </View>
              <View style={style.inline}>
                <ButtonComponent
                  title="Voir toutes les services"
                  onPress={() => {}}
                />
                <View />
              </View>
            </View>
          </View>
          <View style={[styles.section_description]}>
            <View
              style={[styles.section_description1, {flex: 1}, style.vertical]}>
              <View style={styles.section_description1_v}>
                <Text style={styles.section_description1_t}>Description</Text>
              </View>
              <View>
                {[1, 2, 3, 4, 5].map(key => (
                  <View key={key} style={[style.inline, {margin: 10}]}>
                    <View style={{margin: 20}}>
                      <Image
                        source={icons.icon_description?.default}
                        // resizeMode="cover"
                        style={{
                          width: 72,
                          height: 72,
                        }}
                      />
                    </View>
                    <View style={{flex: 1, alignSelf: 'center'}}>
                      <Text>Headline</Text>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Interdum porta magna at blandit a.
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
              <View />
            </View>
            <View style={styles.section_description2}>
              <Image
                source={images.image?.default}
                style={{
                  width: width > 1140 ? 450 : width,
                  height: width > 1140 ? 700 : width,
                }}
              />
            </View>
          </View>
          <View style={[styles.section_avis]}>
            <View style={{margin: 20, marginLeft: 5}}>
              <Text style={styles.title}>Avis des clients</Text>
            </View>
            <View>
              <Text style={styles.text12}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'red'}}>
              <ScrollView
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                // scrollEventThrottle={10}
                horizontal
                // onScroll={Animated.event([
                //   // {nativeEvent: {contentOffset: {x: scrollX}}},
                // ])}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {x: position}}}],
                  // {listener: event => handleScroll(event)},
                )}
                onMomentumScrollEnd={e => {
                  console.log({e});
                }}
                scrollEventThrottle={16}>
                {[1, 2, 3, 4, 5, 6, 7].map((_item, key) => (
                  <View
                    key={key}
                    style={{width: 1100 / 3 - 30, alignItems: 'center'}}>
                    <View
                      style={{
                        alignSelf: 'center',
                        flex: 1,
                        alignItems: 'center',
                        margin: 10,
                        marginBottom: 0,
                        backgroundColor: '#C4C4C4',
                        borderRadius: 10,
                        padding: 10,
                      }}>
                      <View>
                        <Text>Efficient Collaborating</Text>
                      </View>
                      <View>
                        <Text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Auctor neque sed imperdiet nibh lectus feugiat
                          nunc sem.
                        </Text>
                      </View>
                    </View>
                    <View style={styles.triangle} />
                    <View
                      style={{
                        alignSelf: 'center',
                        flex: 1,
                        alignItems: 'center',
                        margin: 20,
                      }}>
                      <Image
                        source={images.picture?.default}
                        style={{
                          width: 60,
                          height: 60,
                        }}
                      />
                      <Text>Jane Cooper</Text>
                      <Text>CEO at ABC Corporation</Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
              <View style={{flex: 1, alignItems: 'center', margin: 20}}>
                {renderDotsView([1, 2, 3, 4, 5, 6, 7], position)}
              </View>
            </View>
          </View>
        </View>
      </PageContainer>
    </View>
  );
};

export const HomeScreen: any = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
