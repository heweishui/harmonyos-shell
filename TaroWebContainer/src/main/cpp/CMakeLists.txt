# the minimum version of CMake.
cmake_minimum_required(VERSION 3.4.1)
project(harmonyos-shell)

set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})

include_directories(${NATIVERENDER_ROOT_PATH}
                    ${NATIVERENDER_ROOT_PATH}/include)

add_library(tarowebcontainer SHARED hello.cpp)
target_link_libraries(tarowebcontainer PUBLIC libace_napi.z.so libhilog_ndk.z.so)

#将zlib三方库加入工程中
target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/zlib/${OHOS_ARCH}/lib/libz.a)
#将zlib三方库的头文件加入工程中
target_include_directories(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/zlib/${OHOS_ARCH}/include)

#将openssl三方库加入工程中
target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/openssl/${OHOS_ARCH}/lib/libssl.a)
target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/openssl/${OHOS_ARCH}/lib/libcrypto.a)
#将openssl三方库的头文件加入工程中
target_include_directories(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/openssl/${OHOS_ARCH}/include)

#将ffmpeg三方库加入工程中
target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/FFmpeg/${OHOS_ARCH}/lib/libavcodec.a)
target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/FFmpeg/${OHOS_ARCH}/lib/libavdevice.a)
target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/FFmpeg/${OHOS_ARCH}/lib/libavfilter.a)
target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/FFmpeg/${OHOS_ARCH}/lib/libavformat.a)
target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/FFmpeg/${OHOS_ARCH}/lib/libavutil.a)
target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/FFmpeg/${OHOS_ARCH}/lib/libswresample.a)
target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/FFmpeg/${OHOS_ARCH}/lib/libswscale.a)
target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/zlib/${OHOS_ARCH}/lib/libz.a)

target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/openssl_1_0_2u/${OHOS_ARCH}/lib/libcrypto.a)
target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/openssl_1_0_2u/${OHOS_ARCH}/lib/libssl.a)
target_link_libraries(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/rtmpdump/${OHOS_ARCH}/lib/librtmp.a)

#将ffmpeg三方库的头文件加入工程中
target_include_directories(tarowebcontainer PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/FFmpeg/${OHOS_ARCH}/include)