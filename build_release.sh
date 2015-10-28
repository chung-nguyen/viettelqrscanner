#!/bin/bash
export DEVKIT_ANDROID_KEYSTORE="$PWD/marsmaker.keystore"
export DEVKIT_ANDROID_STOREPASS="sn123456"
export DEVKIT_ANDROID_KEYPASS="mm123456"
export DEVKIT_ANDROID_KEY="mars"

devkit release native-android

