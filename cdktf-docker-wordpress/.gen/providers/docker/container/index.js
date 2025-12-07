"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/container
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.ContainerVolumesList = exports.ContainerVolumesOutputReference = exports.ContainerUploadList = exports.ContainerUploadOutputReference = exports.ContainerUlimitList = exports.ContainerUlimitOutputReference = exports.ContainerPortsList = exports.ContainerPortsOutputReference = exports.ContainerNetworksAdvancedList = exports.ContainerNetworksAdvancedOutputReference = exports.ContainerMountsList = exports.ContainerMountsOutputReference = exports.ContainerMountsVolumeOptionsOutputReference = exports.ContainerMountsVolumeOptionsLabelsList = exports.ContainerMountsVolumeOptionsLabelsOutputReference = exports.ContainerMountsTmpfsOptionsOutputReference = exports.ContainerMountsBindOptionsOutputReference = exports.ContainerLabelsList = exports.ContainerLabelsOutputReference = exports.ContainerHostList = exports.ContainerHostOutputReference = exports.ContainerHealthcheckOutputReference = exports.ContainerDevicesList = exports.ContainerDevicesOutputReference = exports.ContainerCapabilitiesOutputReference = exports.ContainerNetworkDataList = exports.ContainerNetworkDataOutputReference = void 0;
exports.containerNetworkDataToTerraform = containerNetworkDataToTerraform;
exports.containerNetworkDataToHclTerraform = containerNetworkDataToHclTerraform;
exports.containerCapabilitiesToTerraform = containerCapabilitiesToTerraform;
exports.containerCapabilitiesToHclTerraform = containerCapabilitiesToHclTerraform;
exports.containerDevicesToTerraform = containerDevicesToTerraform;
exports.containerDevicesToHclTerraform = containerDevicesToHclTerraform;
exports.containerHealthcheckToTerraform = containerHealthcheckToTerraform;
exports.containerHealthcheckToHclTerraform = containerHealthcheckToHclTerraform;
exports.containerHostToTerraform = containerHostToTerraform;
exports.containerHostToHclTerraform = containerHostToHclTerraform;
exports.containerLabelsToTerraform = containerLabelsToTerraform;
exports.containerLabelsToHclTerraform = containerLabelsToHclTerraform;
exports.containerMountsBindOptionsToTerraform = containerMountsBindOptionsToTerraform;
exports.containerMountsBindOptionsToHclTerraform = containerMountsBindOptionsToHclTerraform;
exports.containerMountsTmpfsOptionsToTerraform = containerMountsTmpfsOptionsToTerraform;
exports.containerMountsTmpfsOptionsToHclTerraform = containerMountsTmpfsOptionsToHclTerraform;
exports.containerMountsVolumeOptionsLabelsToTerraform = containerMountsVolumeOptionsLabelsToTerraform;
exports.containerMountsVolumeOptionsLabelsToHclTerraform = containerMountsVolumeOptionsLabelsToHclTerraform;
exports.containerMountsVolumeOptionsToTerraform = containerMountsVolumeOptionsToTerraform;
exports.containerMountsVolumeOptionsToHclTerraform = containerMountsVolumeOptionsToHclTerraform;
exports.containerMountsToTerraform = containerMountsToTerraform;
exports.containerMountsToHclTerraform = containerMountsToHclTerraform;
exports.containerNetworksAdvancedToTerraform = containerNetworksAdvancedToTerraform;
exports.containerNetworksAdvancedToHclTerraform = containerNetworksAdvancedToHclTerraform;
exports.containerPortsToTerraform = containerPortsToTerraform;
exports.containerPortsToHclTerraform = containerPortsToHclTerraform;
exports.containerUlimitToTerraform = containerUlimitToTerraform;
exports.containerUlimitToHclTerraform = containerUlimitToHclTerraform;
exports.containerUploadToTerraform = containerUploadToTerraform;
exports.containerUploadToHclTerraform = containerUploadToHclTerraform;
exports.containerVolumesToTerraform = containerVolumesToTerraform;
exports.containerVolumesToHclTerraform = containerVolumesToHclTerraform;
const cdktf = require("cdktf");
function containerNetworkDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function containerNetworkDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
class ContainerNetworkDataOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // gateway - computed: true, optional: false, required: false
    get gateway() {
        return this.getStringAttribute('gateway');
    }
    // global_ipv6_address - computed: true, optional: false, required: false
    get globalIpv6Address() {
        return this.getStringAttribute('global_ipv6_address');
    }
    // global_ipv6_prefix_length - computed: true, optional: false, required: false
    get globalIpv6PrefixLength() {
        return this.getNumberAttribute('global_ipv6_prefix_length');
    }
    // ip_address - computed: true, optional: false, required: false
    get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    // ip_prefix_length - computed: true, optional: false, required: false
    get ipPrefixLength() {
        return this.getNumberAttribute('ip_prefix_length');
    }
    // ipv6_gateway - computed: true, optional: false, required: false
    get ipv6Gateway() {
        return this.getStringAttribute('ipv6_gateway');
    }
    // mac_address - computed: true, optional: false, required: false
    get macAddress() {
        return this.getStringAttribute('mac_address');
    }
    // network_name - computed: true, optional: false, required: false
    get networkName() {
        return this.getStringAttribute('network_name');
    }
}
exports.ContainerNetworkDataOutputReference = ContainerNetworkDataOutputReference;
class ContainerNetworkDataList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ContainerNetworkDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ContainerNetworkDataList = ContainerNetworkDataList;
function containerCapabilitiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.add),
        drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.drop),
    };
}
function containerCapabilitiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        add: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.add),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        drop: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.drop),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerCapabilitiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._add !== undefined) {
            hasAnyValues = true;
            internalValueResult.add = this._add;
        }
        if (this._drop !== undefined) {
            hasAnyValues = true;
            internalValueResult.drop = this._drop;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._add = undefined;
            this._drop = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._add = value.add;
            this._drop = value.drop;
        }
    }
    get add() {
        return cdktf.Fn.tolist(this.getListAttribute('add'));
    }
    set add(value) {
        this._add = value;
    }
    resetAdd() {
        this._add = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get addInput() {
        return this._add;
    }
    get drop() {
        return cdktf.Fn.tolist(this.getListAttribute('drop'));
    }
    set drop(value) {
        this._drop = value;
    }
    resetDrop() {
        this._drop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dropInput() {
        return this._drop;
    }
}
exports.ContainerCapabilitiesOutputReference = ContainerCapabilitiesOutputReference;
function containerDevicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        container_path: cdktf.stringToTerraform(struct.containerPath),
        host_path: cdktf.stringToTerraform(struct.hostPath),
        permissions: cdktf.stringToTerraform(struct.permissions),
    };
}
function containerDevicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        container_path: {
            value: cdktf.stringToHclTerraform(struct.containerPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_path: {
            value: cdktf.stringToHclTerraform(struct.hostPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permissions: {
            value: cdktf.stringToHclTerraform(struct.permissions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerDevicesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._containerPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerPath = this._containerPath;
        }
        if (this._hostPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostPath = this._hostPath;
        }
        if (this._permissions !== undefined) {
            hasAnyValues = true;
            internalValueResult.permissions = this._permissions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerPath = undefined;
            this._hostPath = undefined;
            this._permissions = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerPath = value.containerPath;
            this._hostPath = value.hostPath;
            this._permissions = value.permissions;
        }
    }
    get containerPath() {
        return this.getStringAttribute('container_path');
    }
    set containerPath(value) {
        this._containerPath = value;
    }
    resetContainerPath() {
        this._containerPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containerPathInput() {
        return this._containerPath;
    }
    get hostPath() {
        return this.getStringAttribute('host_path');
    }
    set hostPath(value) {
        this._hostPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostPathInput() {
        return this._hostPath;
    }
    get permissions() {
        return this.getStringAttribute('permissions');
    }
    set permissions(value) {
        this._permissions = value;
    }
    resetPermissions() {
        this._permissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get permissionsInput() {
        return this._permissions;
    }
}
exports.ContainerDevicesOutputReference = ContainerDevicesOutputReference;
class ContainerDevicesList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ContainerDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ContainerDevicesList = ContainerDevicesList;
function containerHealthcheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        interval: cdktf.stringToTerraform(struct.interval),
        retries: cdktf.numberToTerraform(struct.retries),
        start_interval: cdktf.stringToTerraform(struct.startInterval),
        start_period: cdktf.stringToTerraform(struct.startPeriod),
        test: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.test),
        timeout: cdktf.stringToTerraform(struct.timeout),
    };
}
function containerHealthcheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        interval: {
            value: cdktf.stringToHclTerraform(struct.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retries: {
            value: cdktf.numberToHclTerraform(struct.retries),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_interval: {
            value: cdktf.stringToHclTerraform(struct.startInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_period: {
            value: cdktf.stringToHclTerraform(struct.startPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        test: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.test),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        timeout: {
            value: cdktf.stringToHclTerraform(struct.timeout),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerHealthcheckOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._retries !== undefined) {
            hasAnyValues = true;
            internalValueResult.retries = this._retries;
        }
        if (this._startInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.startInterval = this._startInterval;
        }
        if (this._startPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.startPeriod = this._startPeriod;
        }
        if (this._test !== undefined) {
            hasAnyValues = true;
            internalValueResult.test = this._test;
        }
        if (this._timeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._interval = undefined;
            this._retries = undefined;
            this._startInterval = undefined;
            this._startPeriod = undefined;
            this._test = undefined;
            this._timeout = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._interval = value.interval;
            this._retries = value.retries;
            this._startInterval = value.startInterval;
            this._startPeriod = value.startPeriod;
            this._test = value.test;
            this._timeout = value.timeout;
        }
    }
    get interval() {
        return this.getStringAttribute('interval');
    }
    set interval(value) {
        this._interval = value;
    }
    resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get intervalInput() {
        return this._interval;
    }
    get retries() {
        return this.getNumberAttribute('retries');
    }
    set retries(value) {
        this._retries = value;
    }
    resetRetries() {
        this._retries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retriesInput() {
        return this._retries;
    }
    get startInterval() {
        return this.getStringAttribute('start_interval');
    }
    set startInterval(value) {
        this._startInterval = value;
    }
    resetStartInterval() {
        this._startInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startIntervalInput() {
        return this._startInterval;
    }
    get startPeriod() {
        return this.getStringAttribute('start_period');
    }
    set startPeriod(value) {
        this._startPeriod = value;
    }
    resetStartPeriod() {
        this._startPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startPeriodInput() {
        return this._startPeriod;
    }
    get test() {
        return this.getListAttribute('test');
    }
    set test(value) {
        this._test = value;
    }
    // Temporarily expose input value. Use with caution.
    get testInput() {
        return this._test;
    }
    get timeout() {
        return this.getStringAttribute('timeout');
    }
    set timeout(value) {
        this._timeout = value;
    }
    resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutInput() {
        return this._timeout;
    }
}
exports.ContainerHealthcheckOutputReference = ContainerHealthcheckOutputReference;
function containerHostToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        ip: cdktf.stringToTerraform(struct.ip),
    };
}
function containerHostToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerHostOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._ip = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._ip = value.ip;
        }
    }
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    get ip() {
        return this.getStringAttribute('ip');
    }
    set ip(value) {
        this._ip = value;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip;
    }
}
exports.ContainerHostOutputReference = ContainerHostOutputReference;
class ContainerHostList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ContainerHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ContainerHostList = ContainerHostList;
function containerLabelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function containerLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerLabelsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._label = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._label = value.label;
            this._value = value.value;
        }
    }
    get label() {
        return this.getStringAttribute('label');
    }
    set label(value) {
        this._label = value;
    }
    // Temporarily expose input value. Use with caution.
    get labelInput() {
        return this._label;
    }
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
exports.ContainerLabelsOutputReference = ContainerLabelsOutputReference;
class ContainerLabelsList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ContainerLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ContainerLabelsList = ContainerLabelsList;
function containerMountsBindOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        propagation: cdktf.stringToTerraform(struct.propagation),
    };
}
function containerMountsBindOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        propagation: {
            value: cdktf.stringToHclTerraform(struct.propagation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerMountsBindOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._propagation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propagation = this._propagation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._propagation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._propagation = value.propagation;
        }
    }
    get propagation() {
        return this.getStringAttribute('propagation');
    }
    set propagation(value) {
        this._propagation = value;
    }
    resetPropagation() {
        this._propagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get propagationInput() {
        return this._propagation;
    }
}
exports.ContainerMountsBindOptionsOutputReference = ContainerMountsBindOptionsOutputReference;
function containerMountsTmpfsOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.numberToTerraform(struct.mode),
        size_bytes: cdktf.numberToTerraform(struct.sizeBytes),
    };
}
function containerMountsTmpfsOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mode: {
            value: cdktf.numberToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        size_bytes: {
            value: cdktf.numberToHclTerraform(struct.sizeBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerMountsTmpfsOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._sizeBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeBytes = this._sizeBytes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._mode = undefined;
            this._sizeBytes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._mode = value.mode;
            this._sizeBytes = value.sizeBytes;
        }
    }
    get mode() {
        return this.getNumberAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    get sizeBytes() {
        return this.getNumberAttribute('size_bytes');
    }
    set sizeBytes(value) {
        this._sizeBytes = value;
    }
    resetSizeBytes() {
        this._sizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sizeBytesInput() {
        return this._sizeBytes;
    }
}
exports.ContainerMountsTmpfsOptionsOutputReference = ContainerMountsTmpfsOptionsOutputReference;
function containerMountsVolumeOptionsLabelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function containerMountsVolumeOptionsLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerMountsVolumeOptionsLabelsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._label = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._label = value.label;
            this._value = value.value;
        }
    }
    get label() {
        return this.getStringAttribute('label');
    }
    set label(value) {
        this._label = value;
    }
    // Temporarily expose input value. Use with caution.
    get labelInput() {
        return this._label;
    }
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
exports.ContainerMountsVolumeOptionsLabelsOutputReference = ContainerMountsVolumeOptionsLabelsOutputReference;
class ContainerMountsVolumeOptionsLabelsList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ContainerMountsVolumeOptionsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ContainerMountsVolumeOptionsLabelsList = ContainerMountsVolumeOptionsLabelsList;
function containerMountsVolumeOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        driver_name: cdktf.stringToTerraform(struct.driverName),
        driver_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct.driverOptions),
        no_copy: cdktf.booleanToTerraform(struct.noCopy),
        subpath: cdktf.stringToTerraform(struct.subpath),
        labels: cdktf.listMapper(containerMountsVolumeOptionsLabelsToTerraform, true)(struct.labels),
    };
}
function containerMountsVolumeOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        driver_name: {
            value: cdktf.stringToHclTerraform(struct.driverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        driver_options: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.driverOptions),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        no_copy: {
            value: cdktf.booleanToHclTerraform(struct.noCopy),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        subpath: {
            value: cdktf.stringToHclTerraform(struct.subpath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        labels: {
            value: cdktf.listMapperHcl(containerMountsVolumeOptionsLabelsToHclTerraform, true)(struct.labels),
            isBlock: true,
            type: "set",
            storageClassType: "ContainerMountsVolumeOptionsLabelsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerMountsVolumeOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // labels - computed: false, optional: true, required: false
        this._labels = new ContainerMountsVolumeOptionsLabelsList(this, "labels", true);
    }
    get internalValue() {
        var _a, _b;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._driverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.driverName = this._driverName;
        }
        if (this._driverOptions !== undefined) {
            hasAnyValues = true;
            internalValueResult.driverOptions = this._driverOptions;
        }
        if (this._noCopy !== undefined) {
            hasAnyValues = true;
            internalValueResult.noCopy = this._noCopy;
        }
        if (this._subpath !== undefined) {
            hasAnyValues = true;
            internalValueResult.subpath = this._subpath;
        }
        if (((_a = this._labels) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
            hasAnyValues = true;
            internalValueResult.labels = (_b = this._labels) === null || _b === void 0 ? void 0 : _b.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._driverName = undefined;
            this._driverOptions = undefined;
            this._noCopy = undefined;
            this._subpath = undefined;
            this._labels.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._driverName = value.driverName;
            this._driverOptions = value.driverOptions;
            this._noCopy = value.noCopy;
            this._subpath = value.subpath;
            this._labels.internalValue = value.labels;
        }
    }
    get driverName() {
        return this.getStringAttribute('driver_name');
    }
    set driverName(value) {
        this._driverName = value;
    }
    resetDriverName() {
        this._driverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get driverNameInput() {
        return this._driverName;
    }
    get driverOptions() {
        return this.getStringMapAttribute('driver_options');
    }
    set driverOptions(value) {
        this._driverOptions = value;
    }
    resetDriverOptions() {
        this._driverOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get driverOptionsInput() {
        return this._driverOptions;
    }
    get noCopy() {
        return this.getBooleanAttribute('no_copy');
    }
    set noCopy(value) {
        this._noCopy = value;
    }
    resetNoCopy() {
        this._noCopy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noCopyInput() {
        return this._noCopy;
    }
    get subpath() {
        return this.getStringAttribute('subpath');
    }
    set subpath(value) {
        this._subpath = value;
    }
    resetSubpath() {
        this._subpath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subpathInput() {
        return this._subpath;
    }
    get labels() {
        return this._labels;
    }
    putLabels(value) {
        this._labels.internalValue = value;
    }
    resetLabels() {
        this._labels.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelsInput() {
        return this._labels.internalValue;
    }
}
exports.ContainerMountsVolumeOptionsOutputReference = ContainerMountsVolumeOptionsOutputReference;
function containerMountsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        read_only: cdktf.booleanToTerraform(struct.readOnly),
        source: cdktf.stringToTerraform(struct.source),
        target: cdktf.stringToTerraform(struct.target),
        type: cdktf.stringToTerraform(struct.type),
        bind_options: containerMountsBindOptionsToTerraform(struct.bindOptions),
        tmpfs_options: containerMountsTmpfsOptionsToTerraform(struct.tmpfsOptions),
        volume_options: containerMountsVolumeOptionsToTerraform(struct.volumeOptions),
    };
}
function containerMountsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        read_only: {
            value: cdktf.booleanToHclTerraform(struct.readOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bind_options: {
            value: containerMountsBindOptionsToHclTerraform(struct.bindOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ContainerMountsBindOptionsList",
        },
        tmpfs_options: {
            value: containerMountsTmpfsOptionsToHclTerraform(struct.tmpfsOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ContainerMountsTmpfsOptionsList",
        },
        volume_options: {
            value: containerMountsVolumeOptionsToHclTerraform(struct.volumeOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ContainerMountsVolumeOptionsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerMountsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // bind_options - computed: false, optional: true, required: false
        this._bindOptions = new ContainerMountsBindOptionsOutputReference(this, "bind_options");
        // tmpfs_options - computed: false, optional: true, required: false
        this._tmpfsOptions = new ContainerMountsTmpfsOptionsOutputReference(this, "tmpfs_options");
        // volume_options - computed: false, optional: true, required: false
        this._volumeOptions = new ContainerMountsVolumeOptionsOutputReference(this, "volume_options");
    }
    get internalValue() {
        var _a, _b, _c, _d, _e, _f;
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._readOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.readOnly = this._readOnly;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (((_a = this._bindOptions) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
            hasAnyValues = true;
            internalValueResult.bindOptions = (_b = this._bindOptions) === null || _b === void 0 ? void 0 : _b.internalValue;
        }
        if (((_c = this._tmpfsOptions) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
            hasAnyValues = true;
            internalValueResult.tmpfsOptions = (_d = this._tmpfsOptions) === null || _d === void 0 ? void 0 : _d.internalValue;
        }
        if (((_e = this._volumeOptions) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeOptions = (_f = this._volumeOptions) === null || _f === void 0 ? void 0 : _f.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readOnly = undefined;
            this._source = undefined;
            this._target = undefined;
            this._type = undefined;
            this._bindOptions.internalValue = undefined;
            this._tmpfsOptions.internalValue = undefined;
            this._volumeOptions.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readOnly = value.readOnly;
            this._source = value.source;
            this._target = value.target;
            this._type = value.type;
            this._bindOptions.internalValue = value.bindOptions;
            this._tmpfsOptions.internalValue = value.tmpfsOptions;
            this._volumeOptions.internalValue = value.volumeOptions;
        }
    }
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    set readOnly(value) {
        this._readOnly = value;
    }
    resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readOnlyInput() {
        return this._readOnly;
    }
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
    get target() {
        return this.getStringAttribute('target');
    }
    set target(value) {
        this._target = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetInput() {
        return this._target;
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    get bindOptions() {
        return this._bindOptions;
    }
    putBindOptions(value) {
        this._bindOptions.internalValue = value;
    }
    resetBindOptions() {
        this._bindOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bindOptionsInput() {
        return this._bindOptions.internalValue;
    }
    get tmpfsOptions() {
        return this._tmpfsOptions;
    }
    putTmpfsOptions(value) {
        this._tmpfsOptions.internalValue = value;
    }
    resetTmpfsOptions() {
        this._tmpfsOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tmpfsOptionsInput() {
        return this._tmpfsOptions.internalValue;
    }
    get volumeOptions() {
        return this._volumeOptions;
    }
    putVolumeOptions(value) {
        this._volumeOptions.internalValue = value;
    }
    resetVolumeOptions() {
        this._volumeOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get volumeOptionsInput() {
        return this._volumeOptions.internalValue;
    }
}
exports.ContainerMountsOutputReference = ContainerMountsOutputReference;
class ContainerMountsList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ContainerMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ContainerMountsList = ContainerMountsList;
function containerNetworksAdvancedToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.aliases),
        ipv4_address: cdktf.stringToTerraform(struct.ipv4Address),
        ipv6_address: cdktf.stringToTerraform(struct.ipv6Address),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function containerNetworksAdvancedToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        aliases: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.aliases),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        ipv4_address: {
            value: cdktf.stringToHclTerraform(struct.ipv4Address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv6_address: {
            value: cdktf.stringToHclTerraform(struct.ipv6Address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerNetworksAdvancedOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._aliases !== undefined) {
            hasAnyValues = true;
            internalValueResult.aliases = this._aliases;
        }
        if (this._ipv4Address !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4Address = this._ipv4Address;
        }
        if (this._ipv6Address !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Address = this._ipv6Address;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aliases = undefined;
            this._ipv4Address = undefined;
            this._ipv6Address = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aliases = value.aliases;
            this._ipv4Address = value.ipv4Address;
            this._ipv6Address = value.ipv6Address;
            this._name = value.name;
        }
    }
    get aliases() {
        return cdktf.Fn.tolist(this.getListAttribute('aliases'));
    }
    set aliases(value) {
        this._aliases = value;
    }
    resetAliases() {
        this._aliases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasesInput() {
        return this._aliases;
    }
    get ipv4Address() {
        return this.getStringAttribute('ipv4_address');
    }
    set ipv4Address(value) {
        this._ipv4Address = value;
    }
    resetIpv4Address() {
        this._ipv4Address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4AddressInput() {
        return this._ipv4Address;
    }
    get ipv6Address() {
        return this.getStringAttribute('ipv6_address');
    }
    set ipv6Address(value) {
        this._ipv6Address = value;
    }
    resetIpv6Address() {
        this._ipv6Address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6AddressInput() {
        return this._ipv6Address;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
exports.ContainerNetworksAdvancedOutputReference = ContainerNetworksAdvancedOutputReference;
class ContainerNetworksAdvancedList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ContainerNetworksAdvancedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ContainerNetworksAdvancedList = ContainerNetworksAdvancedList;
function containerPortsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        external: cdktf.numberToTerraform(struct.external),
        internal: cdktf.numberToTerraform(struct.internal),
        ip: cdktf.stringToTerraform(struct.ip),
        protocol: cdktf.stringToTerraform(struct.protocol),
    };
}
function containerPortsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        external: {
            value: cdktf.numberToHclTerraform(struct.external),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        internal: {
            value: cdktf.numberToHclTerraform(struct.internal),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktf.stringToHclTerraform(struct.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerPortsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._external !== undefined) {
            hasAnyValues = true;
            internalValueResult.external = this._external;
        }
        if (this._internal !== undefined) {
            hasAnyValues = true;
            internalValueResult.internal = this._internal;
        }
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._external = undefined;
            this._internal = undefined;
            this._ip = undefined;
            this._protocol = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._external = value.external;
            this._internal = value.internal;
            this._ip = value.ip;
            this._protocol = value.protocol;
        }
    }
    get external() {
        return this.getNumberAttribute('external');
    }
    set external(value) {
        this._external = value;
    }
    resetExternal() {
        this._external = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalInput() {
        return this._external;
    }
    get internal() {
        return this.getNumberAttribute('internal');
    }
    set internal(value) {
        this._internal = value;
    }
    // Temporarily expose input value. Use with caution.
    get internalInput() {
        return this._internal;
    }
    get ip() {
        return this.getStringAttribute('ip');
    }
    set ip(value) {
        this._ip = value;
    }
    resetIp() {
        this._ip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip;
    }
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
}
exports.ContainerPortsOutputReference = ContainerPortsOutputReference;
class ContainerPortsList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ContainerPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ContainerPortsList = ContainerPortsList;
function containerUlimitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hard: cdktf.numberToTerraform(struct.hard),
        name: cdktf.stringToTerraform(struct.name),
        soft: cdktf.numberToTerraform(struct.soft),
    };
}
function containerUlimitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        hard: {
            value: cdktf.numberToHclTerraform(struct.hard),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        soft: {
            value: cdktf.numberToHclTerraform(struct.soft),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerUlimitOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._hard !== undefined) {
            hasAnyValues = true;
            internalValueResult.hard = this._hard;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._soft !== undefined) {
            hasAnyValues = true;
            internalValueResult.soft = this._soft;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hard = undefined;
            this._name = undefined;
            this._soft = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hard = value.hard;
            this._name = value.name;
            this._soft = value.soft;
        }
    }
    get hard() {
        return this.getNumberAttribute('hard');
    }
    set hard(value) {
        this._hard = value;
    }
    // Temporarily expose input value. Use with caution.
    get hardInput() {
        return this._hard;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get soft() {
        return this.getNumberAttribute('soft');
    }
    set soft(value) {
        this._soft = value;
    }
    // Temporarily expose input value. Use with caution.
    get softInput() {
        return this._soft;
    }
}
exports.ContainerUlimitOutputReference = ContainerUlimitOutputReference;
class ContainerUlimitList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ContainerUlimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ContainerUlimitList = ContainerUlimitList;
function containerUploadToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_base64: cdktf.stringToTerraform(struct.contentBase64),
        executable: cdktf.booleanToTerraform(struct.executable),
        file: cdktf.stringToTerraform(struct.file),
        permissions: cdktf.stringToTerraform(struct.permissions),
        source: cdktf.stringToTerraform(struct.source),
        source_hash: cdktf.stringToTerraform(struct.sourceHash),
    };
}
function containerUploadToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        content: {
            value: cdktf.stringToHclTerraform(struct.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_base64: {
            value: cdktf.stringToHclTerraform(struct.contentBase64),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        executable: {
            value: cdktf.booleanToHclTerraform(struct.executable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        file: {
            value: cdktf.stringToHclTerraform(struct.file),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permissions: {
            value: cdktf.stringToHclTerraform(struct.permissions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_hash: {
            value: cdktf.stringToHclTerraform(struct.sourceHash),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerUploadOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._content !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content;
        }
        if (this._contentBase64 !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentBase64 = this._contentBase64;
        }
        if (this._executable !== undefined) {
            hasAnyValues = true;
            internalValueResult.executable = this._executable;
        }
        if (this._file !== undefined) {
            hasAnyValues = true;
            internalValueResult.file = this._file;
        }
        if (this._permissions !== undefined) {
            hasAnyValues = true;
            internalValueResult.permissions = this._permissions;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._sourceHash !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceHash = this._sourceHash;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._content = undefined;
            this._contentBase64 = undefined;
            this._executable = undefined;
            this._file = undefined;
            this._permissions = undefined;
            this._source = undefined;
            this._sourceHash = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._content = value.content;
            this._contentBase64 = value.contentBase64;
            this._executable = value.executable;
            this._file = value.file;
            this._permissions = value.permissions;
            this._source = value.source;
            this._sourceHash = value.sourceHash;
        }
    }
    get content() {
        return this.getStringAttribute('content');
    }
    set content(value) {
        this._content = value;
    }
    resetContent() {
        this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentInput() {
        return this._content;
    }
    get contentBase64() {
        return this.getStringAttribute('content_base64');
    }
    set contentBase64(value) {
        this._contentBase64 = value;
    }
    resetContentBase64() {
        this._contentBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentBase64Input() {
        return this._contentBase64;
    }
    get executable() {
        return this.getBooleanAttribute('executable');
    }
    set executable(value) {
        this._executable = value;
    }
    resetExecutable() {
        this._executable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get executableInput() {
        return this._executable;
    }
    get file() {
        return this.getStringAttribute('file');
    }
    set file(value) {
        this._file = value;
    }
    // Temporarily expose input value. Use with caution.
    get fileInput() {
        return this._file;
    }
    get permissions() {
        return this.getStringAttribute('permissions');
    }
    set permissions(value) {
        this._permissions = value;
    }
    resetPermissions() {
        this._permissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get permissionsInput() {
        return this._permissions;
    }
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
    get sourceHash() {
        return this.getStringAttribute('source_hash');
    }
    set sourceHash(value) {
        this._sourceHash = value;
    }
    resetSourceHash() {
        this._sourceHash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceHashInput() {
        return this._sourceHash;
    }
}
exports.ContainerUploadOutputReference = ContainerUploadOutputReference;
class ContainerUploadList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ContainerUploadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ContainerUploadList = ContainerUploadList;
function containerVolumesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        container_path: cdktf.stringToTerraform(struct.containerPath),
        from_container: cdktf.stringToTerraform(struct.fromContainer),
        host_path: cdktf.stringToTerraform(struct.hostPath),
        read_only: cdktf.booleanToTerraform(struct.readOnly),
        volume_name: cdktf.stringToTerraform(struct.volumeName),
    };
}
function containerVolumesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        container_path: {
            value: cdktf.stringToHclTerraform(struct.containerPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        from_container: {
            value: cdktf.stringToHclTerraform(struct.fromContainer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_path: {
            value: cdktf.stringToHclTerraform(struct.hostPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        read_only: {
            value: cdktf.booleanToHclTerraform(struct.readOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        volume_name: {
            value: cdktf.stringToHclTerraform(struct.volumeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ContainerVolumesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._containerPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerPath = this._containerPath;
        }
        if (this._fromContainer !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromContainer = this._fromContainer;
        }
        if (this._hostPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostPath = this._hostPath;
        }
        if (this._readOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.readOnly = this._readOnly;
        }
        if (this._volumeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeName = this._volumeName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerPath = undefined;
            this._fromContainer = undefined;
            this._hostPath = undefined;
            this._readOnly = undefined;
            this._volumeName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerPath = value.containerPath;
            this._fromContainer = value.fromContainer;
            this._hostPath = value.hostPath;
            this._readOnly = value.readOnly;
            this._volumeName = value.volumeName;
        }
    }
    get containerPath() {
        return this.getStringAttribute('container_path');
    }
    set containerPath(value) {
        this._containerPath = value;
    }
    resetContainerPath() {
        this._containerPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containerPathInput() {
        return this._containerPath;
    }
    get fromContainer() {
        return this.getStringAttribute('from_container');
    }
    set fromContainer(value) {
        this._fromContainer = value;
    }
    resetFromContainer() {
        this._fromContainer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fromContainerInput() {
        return this._fromContainer;
    }
    get hostPath() {
        return this.getStringAttribute('host_path');
    }
    set hostPath(value) {
        this._hostPath = value;
    }
    resetHostPath() {
        this._hostPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostPathInput() {
        return this._hostPath;
    }
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    set readOnly(value) {
        this._readOnly = value;
    }
    resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readOnlyInput() {
        return this._readOnly;
    }
    get volumeName() {
        return this.getStringAttribute('volume_name');
    }
    set volumeName(value) {
        this._volumeName = value;
    }
    resetVolumeName() {
        this._volumeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get volumeNameInput() {
        return this._volumeName;
    }
}
exports.ContainerVolumesOutputReference = ContainerVolumesOutputReference;
class ContainerVolumesList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ContainerVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ContainerVolumesList = ContainerVolumesList;
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/container docker_container}
*/
class Container extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Container resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Container to import
    * @param importFromId The id of the existing Container that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/container#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Container to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_container", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/container docker_container} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ContainerConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'docker_container',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '3.6.2',
                providerVersionConstraint: '~> 3.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        // network_data - computed: true, optional: false, required: false
        this._networkData = new ContainerNetworkDataList(this, "network_data", false);
        // capabilities - computed: false, optional: true, required: false
        this._capabilities = new ContainerCapabilitiesOutputReference(this, "capabilities");
        // devices - computed: false, optional: true, required: false
        this._devices = new ContainerDevicesList(this, "devices", true);
        // healthcheck - computed: false, optional: true, required: false
        this._healthcheck = new ContainerHealthcheckOutputReference(this, "healthcheck");
        // host - computed: false, optional: true, required: false
        this._host = new ContainerHostList(this, "host", true);
        // labels - computed: false, optional: true, required: false
        this._labels = new ContainerLabelsList(this, "labels", true);
        // mounts - computed: false, optional: true, required: false
        this._mounts = new ContainerMountsList(this, "mounts", true);
        // networks_advanced - computed: false, optional: true, required: false
        this._networksAdvanced = new ContainerNetworksAdvancedList(this, "networks_advanced", true);
        // ports - computed: false, optional: true, required: false
        this._ports = new ContainerPortsList(this, "ports", false);
        // ulimit - computed: false, optional: true, required: false
        this._ulimit = new ContainerUlimitList(this, "ulimit", true);
        // upload - computed: false, optional: true, required: false
        this._upload = new ContainerUploadList(this, "upload", true);
        // volumes - computed: false, optional: true, required: false
        this._volumes = new ContainerVolumesList(this, "volumes", true);
        this._attach = config.attach;
        this._cgroupParent = config.cgroupParent;
        this._cgroupnsMode = config.cgroupnsMode;
        this._command = config.command;
        this._containerReadRefreshTimeoutMilliseconds = config.containerReadRefreshTimeoutMilliseconds;
        this._cpuPeriod = config.cpuPeriod;
        this._cpuQuota = config.cpuQuota;
        this._cpuSet = config.cpuSet;
        this._cpuShares = config.cpuShares;
        this._cpus = config.cpus;
        this._destroyGraceSeconds = config.destroyGraceSeconds;
        this._dns = config.dns;
        this._dnsOpts = config.dnsOpts;
        this._dnsSearch = config.dnsSearch;
        this._domainname = config.domainname;
        this._entrypoint = config.entrypoint;
        this._env = config.env;
        this._gpus = config.gpus;
        this._groupAdd = config.groupAdd;
        this._hostname = config.hostname;
        this._id = config.id;
        this._image = config.image;
        this._init = config.init;
        this._ipcMode = config.ipcMode;
        this._logDriver = config.logDriver;
        this._logOpts = config.logOpts;
        this._logs = config.logs;
        this._maxRetryCount = config.maxRetryCount;
        this._memory = config.memory;
        this._memorySwap = config.memorySwap;
        this._mustRun = config.mustRun;
        this._name = config.name;
        this._networkMode = config.networkMode;
        this._pidMode = config.pidMode;
        this._privileged = config.privileged;
        this._publishAllPorts = config.publishAllPorts;
        this._readOnly = config.readOnly;
        this._removeVolumes = config.removeVolumes;
        this._restart = config.restart;
        this._rm = config.rm;
        this._runtime = config.runtime;
        this._securityOpts = config.securityOpts;
        this._shmSize = config.shmSize;
        this._start = config.start;
        this._stdinOpen = config.stdinOpen;
        this._stopSignal = config.stopSignal;
        this._stopTimeout = config.stopTimeout;
        this._storageOpts = config.storageOpts;
        this._sysctls = config.sysctls;
        this._tmpfs = config.tmpfs;
        this._tty = config.tty;
        this._user = config.user;
        this._usernsMode = config.usernsMode;
        this._wait = config.wait;
        this._waitTimeout = config.waitTimeout;
        this._workingDir = config.workingDir;
        this._capabilities.internalValue = config.capabilities;
        this._devices.internalValue = config.devices;
        this._healthcheck.internalValue = config.healthcheck;
        this._host.internalValue = config.host;
        this._labels.internalValue = config.labels;
        this._mounts.internalValue = config.mounts;
        this._networksAdvanced.internalValue = config.networksAdvanced;
        this._ports.internalValue = config.ports;
        this._ulimit.internalValue = config.ulimit;
        this._upload.internalValue = config.upload;
        this._volumes.internalValue = config.volumes;
    }
    get attach() {
        return this.getBooleanAttribute('attach');
    }
    set attach(value) {
        this._attach = value;
    }
    resetAttach() {
        this._attach = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get attachInput() {
        return this._attach;
    }
    // bridge - computed: true, optional: false, required: false
    get bridge() {
        return this.getStringAttribute('bridge');
    }
    get cgroupParent() {
        return this.getStringAttribute('cgroup_parent');
    }
    set cgroupParent(value) {
        this._cgroupParent = value;
    }
    resetCgroupParent() {
        this._cgroupParent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cgroupParentInput() {
        return this._cgroupParent;
    }
    get cgroupnsMode() {
        return this.getStringAttribute('cgroupns_mode');
    }
    set cgroupnsMode(value) {
        this._cgroupnsMode = value;
    }
    resetCgroupnsMode() {
        this._cgroupnsMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cgroupnsModeInput() {
        return this._cgroupnsMode;
    }
    get command() {
        return this.getListAttribute('command');
    }
    set command(value) {
        this._command = value;
    }
    resetCommand() {
        this._command = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commandInput() {
        return this._command;
    }
    // container_logs - computed: true, optional: false, required: false
    get containerLogs() {
        return this.getStringAttribute('container_logs');
    }
    get containerReadRefreshTimeoutMilliseconds() {
        return this.getNumberAttribute('container_read_refresh_timeout_milliseconds');
    }
    set containerReadRefreshTimeoutMilliseconds(value) {
        this._containerReadRefreshTimeoutMilliseconds = value;
    }
    resetContainerReadRefreshTimeoutMilliseconds() {
        this._containerReadRefreshTimeoutMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containerReadRefreshTimeoutMillisecondsInput() {
        return this._containerReadRefreshTimeoutMilliseconds;
    }
    get cpuPeriod() {
        return this.getNumberAttribute('cpu_period');
    }
    set cpuPeriod(value) {
        this._cpuPeriod = value;
    }
    resetCpuPeriod() {
        this._cpuPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuPeriodInput() {
        return this._cpuPeriod;
    }
    get cpuQuota() {
        return this.getNumberAttribute('cpu_quota');
    }
    set cpuQuota(value) {
        this._cpuQuota = value;
    }
    resetCpuQuota() {
        this._cpuQuota = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuQuotaInput() {
        return this._cpuQuota;
    }
    get cpuSet() {
        return this.getStringAttribute('cpu_set');
    }
    set cpuSet(value) {
        this._cpuSet = value;
    }
    resetCpuSet() {
        this._cpuSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuSetInput() {
        return this._cpuSet;
    }
    get cpuShares() {
        return this.getNumberAttribute('cpu_shares');
    }
    set cpuShares(value) {
        this._cpuShares = value;
    }
    resetCpuShares() {
        this._cpuShares = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuSharesInput() {
        return this._cpuShares;
    }
    get cpus() {
        return this.getStringAttribute('cpus');
    }
    set cpus(value) {
        this._cpus = value;
    }
    resetCpus() {
        this._cpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpusInput() {
        return this._cpus;
    }
    get destroyGraceSeconds() {
        return this.getNumberAttribute('destroy_grace_seconds');
    }
    set destroyGraceSeconds(value) {
        this._destroyGraceSeconds = value;
    }
    resetDestroyGraceSeconds() {
        this._destroyGraceSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destroyGraceSecondsInput() {
        return this._destroyGraceSeconds;
    }
    get dns() {
        return cdktf.Fn.tolist(this.getListAttribute('dns'));
    }
    set dns(value) {
        this._dns = value;
    }
    resetDns() {
        this._dns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsInput() {
        return this._dns;
    }
    get dnsOpts() {
        return cdktf.Fn.tolist(this.getListAttribute('dns_opts'));
    }
    set dnsOpts(value) {
        this._dnsOpts = value;
    }
    resetDnsOpts() {
        this._dnsOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsOptsInput() {
        return this._dnsOpts;
    }
    get dnsSearch() {
        return cdktf.Fn.tolist(this.getListAttribute('dns_search'));
    }
    set dnsSearch(value) {
        this._dnsSearch = value;
    }
    resetDnsSearch() {
        this._dnsSearch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsSearchInput() {
        return this._dnsSearch;
    }
    get domainname() {
        return this.getStringAttribute('domainname');
    }
    set domainname(value) {
        this._domainname = value;
    }
    resetDomainname() {
        this._domainname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get domainnameInput() {
        return this._domainname;
    }
    get entrypoint() {
        return this.getListAttribute('entrypoint');
    }
    set entrypoint(value) {
        this._entrypoint = value;
    }
    resetEntrypoint() {
        this._entrypoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get entrypointInput() {
        return this._entrypoint;
    }
    get env() {
        return cdktf.Fn.tolist(this.getListAttribute('env'));
    }
    set env(value) {
        this._env = value;
    }
    resetEnv() {
        this._env = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get envInput() {
        return this._env;
    }
    // exit_code - computed: true, optional: false, required: false
    get exitCode() {
        return this.getNumberAttribute('exit_code');
    }
    get gpus() {
        return this.getStringAttribute('gpus');
    }
    set gpus(value) {
        this._gpus = value;
    }
    resetGpus() {
        this._gpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gpusInput() {
        return this._gpus;
    }
    get groupAdd() {
        return cdktf.Fn.tolist(this.getListAttribute('group_add'));
    }
    set groupAdd(value) {
        this._groupAdd = value;
    }
    resetGroupAdd() {
        this._groupAdd = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupAddInput() {
        return this._groupAdd;
    }
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    get image() {
        return this.getStringAttribute('image');
    }
    set image(value) {
        this._image = value;
    }
    // Temporarily expose input value. Use with caution.
    get imageInput() {
        return this._image;
    }
    get init() {
        return this.getBooleanAttribute('init');
    }
    set init(value) {
        this._init = value;
    }
    resetInit() {
        this._init = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get initInput() {
        return this._init;
    }
    get ipcMode() {
        return this.getStringAttribute('ipc_mode');
    }
    set ipcMode(value) {
        this._ipcMode = value;
    }
    resetIpcMode() {
        this._ipcMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipcModeInput() {
        return this._ipcMode;
    }
    get logDriver() {
        return this.getStringAttribute('log_driver');
    }
    set logDriver(value) {
        this._logDriver = value;
    }
    resetLogDriver() {
        this._logDriver = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logDriverInput() {
        return this._logDriver;
    }
    get logOpts() {
        return this.getStringMapAttribute('log_opts');
    }
    set logOpts(value) {
        this._logOpts = value;
    }
    resetLogOpts() {
        this._logOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logOptsInput() {
        return this._logOpts;
    }
    get logs() {
        return this.getBooleanAttribute('logs');
    }
    set logs(value) {
        this._logs = value;
    }
    resetLogs() {
        this._logs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logsInput() {
        return this._logs;
    }
    get maxRetryCount() {
        return this.getNumberAttribute('max_retry_count');
    }
    set maxRetryCount(value) {
        this._maxRetryCount = value;
    }
    resetMaxRetryCount() {
        this._maxRetryCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxRetryCountInput() {
        return this._maxRetryCount;
    }
    get memory() {
        return this.getNumberAttribute('memory');
    }
    set memory(value) {
        this._memory = value;
    }
    resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memoryInput() {
        return this._memory;
    }
    get memorySwap() {
        return this.getNumberAttribute('memory_swap');
    }
    set memorySwap(value) {
        this._memorySwap = value;
    }
    resetMemorySwap() {
        this._memorySwap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memorySwapInput() {
        return this._memorySwap;
    }
    get mustRun() {
        return this.getBooleanAttribute('must_run');
    }
    set mustRun(value) {
        this._mustRun = value;
    }
    resetMustRun() {
        this._mustRun = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mustRunInput() {
        return this._mustRun;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get networkData() {
        return this._networkData;
    }
    get networkMode() {
        return this.getStringAttribute('network_mode');
    }
    set networkMode(value) {
        this._networkMode = value;
    }
    resetNetworkMode() {
        this._networkMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkModeInput() {
        return this._networkMode;
    }
    get pidMode() {
        return this.getStringAttribute('pid_mode');
    }
    set pidMode(value) {
        this._pidMode = value;
    }
    resetPidMode() {
        this._pidMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pidModeInput() {
        return this._pidMode;
    }
    get privileged() {
        return this.getBooleanAttribute('privileged');
    }
    set privileged(value) {
        this._privileged = value;
    }
    resetPrivileged() {
        this._privileged = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privilegedInput() {
        return this._privileged;
    }
    get publishAllPorts() {
        return this.getBooleanAttribute('publish_all_ports');
    }
    set publishAllPorts(value) {
        this._publishAllPorts = value;
    }
    resetPublishAllPorts() {
        this._publishAllPorts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publishAllPortsInput() {
        return this._publishAllPorts;
    }
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    set readOnly(value) {
        this._readOnly = value;
    }
    resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readOnlyInput() {
        return this._readOnly;
    }
    get removeVolumes() {
        return this.getBooleanAttribute('remove_volumes');
    }
    set removeVolumes(value) {
        this._removeVolumes = value;
    }
    resetRemoveVolumes() {
        this._removeVolumes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get removeVolumesInput() {
        return this._removeVolumes;
    }
    get restart() {
        return this.getStringAttribute('restart');
    }
    set restart(value) {
        this._restart = value;
    }
    resetRestart() {
        this._restart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restartInput() {
        return this._restart;
    }
    get rm() {
        return this.getBooleanAttribute('rm');
    }
    set rm(value) {
        this._rm = value;
    }
    resetRm() {
        this._rm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rmInput() {
        return this._rm;
    }
    get runtime() {
        return this.getStringAttribute('runtime');
    }
    set runtime(value) {
        this._runtime = value;
    }
    resetRuntime() {
        this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runtimeInput() {
        return this._runtime;
    }
    get securityOpts() {
        return cdktf.Fn.tolist(this.getListAttribute('security_opts'));
    }
    set securityOpts(value) {
        this._securityOpts = value;
    }
    resetSecurityOpts() {
        this._securityOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityOptsInput() {
        return this._securityOpts;
    }
    get shmSize() {
        return this.getNumberAttribute('shm_size');
    }
    set shmSize(value) {
        this._shmSize = value;
    }
    resetShmSize() {
        this._shmSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get shmSizeInput() {
        return this._shmSize;
    }
    get start() {
        return this.getBooleanAttribute('start');
    }
    set start(value) {
        this._start = value;
    }
    resetStart() {
        this._start = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startInput() {
        return this._start;
    }
    get stdinOpen() {
        return this.getBooleanAttribute('stdin_open');
    }
    set stdinOpen(value) {
        this._stdinOpen = value;
    }
    resetStdinOpen() {
        this._stdinOpen = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stdinOpenInput() {
        return this._stdinOpen;
    }
    get stopSignal() {
        return this.getStringAttribute('stop_signal');
    }
    set stopSignal(value) {
        this._stopSignal = value;
    }
    resetStopSignal() {
        this._stopSignal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stopSignalInput() {
        return this._stopSignal;
    }
    get stopTimeout() {
        return this.getNumberAttribute('stop_timeout');
    }
    set stopTimeout(value) {
        this._stopTimeout = value;
    }
    resetStopTimeout() {
        this._stopTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stopTimeoutInput() {
        return this._stopTimeout;
    }
    get storageOpts() {
        return this.getStringMapAttribute('storage_opts');
    }
    set storageOpts(value) {
        this._storageOpts = value;
    }
    resetStorageOpts() {
        this._storageOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageOptsInput() {
        return this._storageOpts;
    }
    get sysctls() {
        return this.getStringMapAttribute('sysctls');
    }
    set sysctls(value) {
        this._sysctls = value;
    }
    resetSysctls() {
        this._sysctls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sysctlsInput() {
        return this._sysctls;
    }
    get tmpfs() {
        return this.getStringMapAttribute('tmpfs');
    }
    set tmpfs(value) {
        this._tmpfs = value;
    }
    resetTmpfs() {
        this._tmpfs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tmpfsInput() {
        return this._tmpfs;
    }
    get tty() {
        return this.getBooleanAttribute('tty');
    }
    set tty(value) {
        this._tty = value;
    }
    resetTty() {
        this._tty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ttyInput() {
        return this._tty;
    }
    get user() {
        return this.getStringAttribute('user');
    }
    set user(value) {
        this._user = value;
    }
    resetUser() {
        this._user = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userInput() {
        return this._user;
    }
    get usernsMode() {
        return this.getStringAttribute('userns_mode');
    }
    set usernsMode(value) {
        this._usernsMode = value;
    }
    resetUsernsMode() {
        this._usernsMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usernsModeInput() {
        return this._usernsMode;
    }
    get wait() {
        return this.getBooleanAttribute('wait');
    }
    set wait(value) {
        this._wait = value;
    }
    resetWait() {
        this._wait = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitInput() {
        return this._wait;
    }
    get waitTimeout() {
        return this.getNumberAttribute('wait_timeout');
    }
    set waitTimeout(value) {
        this._waitTimeout = value;
    }
    resetWaitTimeout() {
        this._waitTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitTimeoutInput() {
        return this._waitTimeout;
    }
    get workingDir() {
        return this.getStringAttribute('working_dir');
    }
    set workingDir(value) {
        this._workingDir = value;
    }
    resetWorkingDir() {
        this._workingDir = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workingDirInput() {
        return this._workingDir;
    }
    get capabilities() {
        return this._capabilities;
    }
    putCapabilities(value) {
        this._capabilities.internalValue = value;
    }
    resetCapabilities() {
        this._capabilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capabilitiesInput() {
        return this._capabilities.internalValue;
    }
    get devices() {
        return this._devices;
    }
    putDevices(value) {
        this._devices.internalValue = value;
    }
    resetDevices() {
        this._devices.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get devicesInput() {
        return this._devices.internalValue;
    }
    get healthcheck() {
        return this._healthcheck;
    }
    putHealthcheck(value) {
        this._healthcheck.internalValue = value;
    }
    resetHealthcheck() {
        this._healthcheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthcheckInput() {
        return this._healthcheck.internalValue;
    }
    get host() {
        return this._host;
    }
    putHost(value) {
        this._host.internalValue = value;
    }
    resetHost() {
        this._host.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host.internalValue;
    }
    get labels() {
        return this._labels;
    }
    putLabels(value) {
        this._labels.internalValue = value;
    }
    resetLabels() {
        this._labels.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelsInput() {
        return this._labels.internalValue;
    }
    get mounts() {
        return this._mounts;
    }
    putMounts(value) {
        this._mounts.internalValue = value;
    }
    resetMounts() {
        this._mounts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mountsInput() {
        return this._mounts.internalValue;
    }
    get networksAdvanced() {
        return this._networksAdvanced;
    }
    putNetworksAdvanced(value) {
        this._networksAdvanced.internalValue = value;
    }
    resetNetworksAdvanced() {
        this._networksAdvanced.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networksAdvancedInput() {
        return this._networksAdvanced.internalValue;
    }
    get ports() {
        return this._ports;
    }
    putPorts(value) {
        this._ports.internalValue = value;
    }
    resetPorts() {
        this._ports.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portsInput() {
        return this._ports.internalValue;
    }
    get ulimit() {
        return this._ulimit;
    }
    putUlimit(value) {
        this._ulimit.internalValue = value;
    }
    resetUlimit() {
        this._ulimit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ulimitInput() {
        return this._ulimit.internalValue;
    }
    get upload() {
        return this._upload;
    }
    putUpload(value) {
        this._upload.internalValue = value;
    }
    resetUpload() {
        this._upload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uploadInput() {
        return this._upload.internalValue;
    }
    get volumes() {
        return this._volumes;
    }
    putVolumes(value) {
        this._volumes.internalValue = value;
    }
    resetVolumes() {
        this._volumes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get volumesInput() {
        return this._volumes.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            attach: cdktf.booleanToTerraform(this._attach),
            cgroup_parent: cdktf.stringToTerraform(this._cgroupParent),
            cgroupns_mode: cdktf.stringToTerraform(this._cgroupnsMode),
            command: cdktf.listMapper(cdktf.stringToTerraform, false)(this._command),
            container_read_refresh_timeout_milliseconds: cdktf.numberToTerraform(this._containerReadRefreshTimeoutMilliseconds),
            cpu_period: cdktf.numberToTerraform(this._cpuPeriod),
            cpu_quota: cdktf.numberToTerraform(this._cpuQuota),
            cpu_set: cdktf.stringToTerraform(this._cpuSet),
            cpu_shares: cdktf.numberToTerraform(this._cpuShares),
            cpus: cdktf.stringToTerraform(this._cpus),
            destroy_grace_seconds: cdktf.numberToTerraform(this._destroyGraceSeconds),
            dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dns),
            dns_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsOpts),
            dns_search: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsSearch),
            domainname: cdktf.stringToTerraform(this._domainname),
            entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entrypoint),
            env: cdktf.listMapper(cdktf.stringToTerraform, false)(this._env),
            gpus: cdktf.stringToTerraform(this._gpus),
            group_add: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupAdd),
            hostname: cdktf.stringToTerraform(this._hostname),
            id: cdktf.stringToTerraform(this._id),
            image: cdktf.stringToTerraform(this._image),
            init: cdktf.booleanToTerraform(this._init),
            ipc_mode: cdktf.stringToTerraform(this._ipcMode),
            log_driver: cdktf.stringToTerraform(this._logDriver),
            log_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._logOpts),
            logs: cdktf.booleanToTerraform(this._logs),
            max_retry_count: cdktf.numberToTerraform(this._maxRetryCount),
            memory: cdktf.numberToTerraform(this._memory),
            memory_swap: cdktf.numberToTerraform(this._memorySwap),
            must_run: cdktf.booleanToTerraform(this._mustRun),
            name: cdktf.stringToTerraform(this._name),
            network_mode: cdktf.stringToTerraform(this._networkMode),
            pid_mode: cdktf.stringToTerraform(this._pidMode),
            privileged: cdktf.booleanToTerraform(this._privileged),
            publish_all_ports: cdktf.booleanToTerraform(this._publishAllPorts),
            read_only: cdktf.booleanToTerraform(this._readOnly),
            remove_volumes: cdktf.booleanToTerraform(this._removeVolumes),
            restart: cdktf.stringToTerraform(this._restart),
            rm: cdktf.booleanToTerraform(this._rm),
            runtime: cdktf.stringToTerraform(this._runtime),
            security_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityOpts),
            shm_size: cdktf.numberToTerraform(this._shmSize),
            start: cdktf.booleanToTerraform(this._start),
            stdin_open: cdktf.booleanToTerraform(this._stdinOpen),
            stop_signal: cdktf.stringToTerraform(this._stopSignal),
            stop_timeout: cdktf.numberToTerraform(this._stopTimeout),
            storage_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._storageOpts),
            sysctls: cdktf.hashMapper(cdktf.stringToTerraform)(this._sysctls),
            tmpfs: cdktf.hashMapper(cdktf.stringToTerraform)(this._tmpfs),
            tty: cdktf.booleanToTerraform(this._tty),
            user: cdktf.stringToTerraform(this._user),
            userns_mode: cdktf.stringToTerraform(this._usernsMode),
            wait: cdktf.booleanToTerraform(this._wait),
            wait_timeout: cdktf.numberToTerraform(this._waitTimeout),
            working_dir: cdktf.stringToTerraform(this._workingDir),
            capabilities: containerCapabilitiesToTerraform(this._capabilities.internalValue),
            devices: cdktf.listMapper(containerDevicesToTerraform, true)(this._devices.internalValue),
            healthcheck: containerHealthcheckToTerraform(this._healthcheck.internalValue),
            host: cdktf.listMapper(containerHostToTerraform, true)(this._host.internalValue),
            labels: cdktf.listMapper(containerLabelsToTerraform, true)(this._labels.internalValue),
            mounts: cdktf.listMapper(containerMountsToTerraform, true)(this._mounts.internalValue),
            networks_advanced: cdktf.listMapper(containerNetworksAdvancedToTerraform, true)(this._networksAdvanced.internalValue),
            ports: cdktf.listMapper(containerPortsToTerraform, true)(this._ports.internalValue),
            ulimit: cdktf.listMapper(containerUlimitToTerraform, true)(this._ulimit.internalValue),
            upload: cdktf.listMapper(containerUploadToTerraform, true)(this._upload.internalValue),
            volumes: cdktf.listMapper(containerVolumesToTerraform, true)(this._volumes.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            attach: {
                value: cdktf.booleanToHclTerraform(this._attach),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cgroup_parent: {
                value: cdktf.stringToHclTerraform(this._cgroupParent),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cgroupns_mode: {
                value: cdktf.stringToHclTerraform(this._cgroupnsMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            command: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._command),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            container_read_refresh_timeout_milliseconds: {
                value: cdktf.numberToHclTerraform(this._containerReadRefreshTimeoutMilliseconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cpu_period: {
                value: cdktf.numberToHclTerraform(this._cpuPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cpu_quota: {
                value: cdktf.numberToHclTerraform(this._cpuQuota),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cpu_set: {
                value: cdktf.stringToHclTerraform(this._cpuSet),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cpu_shares: {
                value: cdktf.numberToHclTerraform(this._cpuShares),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cpus: {
                value: cdktf.stringToHclTerraform(this._cpus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destroy_grace_seconds: {
                value: cdktf.numberToHclTerraform(this._destroyGraceSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            dns: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dns),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            dns_opts: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsOpts),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            dns_search: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsSearch),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            domainname: {
                value: cdktf.stringToHclTerraform(this._domainname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            entrypoint: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entrypoint),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            env: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._env),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            gpus: {
                value: cdktf.stringToHclTerraform(this._gpus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            group_add: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupAdd),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image: {
                value: cdktf.stringToHclTerraform(this._image),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            init: {
                value: cdktf.booleanToHclTerraform(this._init),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ipc_mode: {
                value: cdktf.stringToHclTerraform(this._ipcMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_driver: {
                value: cdktf.stringToHclTerraform(this._logDriver),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_opts: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._logOpts),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            logs: {
                value: cdktf.booleanToHclTerraform(this._logs),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            max_retry_count: {
                value: cdktf.numberToHclTerraform(this._maxRetryCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            memory: {
                value: cdktf.numberToHclTerraform(this._memory),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            memory_swap: {
                value: cdktf.numberToHclTerraform(this._memorySwap),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            must_run: {
                value: cdktf.booleanToHclTerraform(this._mustRun),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_mode: {
                value: cdktf.stringToHclTerraform(this._networkMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pid_mode: {
                value: cdktf.stringToHclTerraform(this._pidMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            privileged: {
                value: cdktf.booleanToHclTerraform(this._privileged),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            publish_all_ports: {
                value: cdktf.booleanToHclTerraform(this._publishAllPorts),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            read_only: {
                value: cdktf.booleanToHclTerraform(this._readOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            remove_volumes: {
                value: cdktf.booleanToHclTerraform(this._removeVolumes),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            restart: {
                value: cdktf.stringToHclTerraform(this._restart),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rm: {
                value: cdktf.booleanToHclTerraform(this._rm),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            runtime: {
                value: cdktf.stringToHclTerraform(this._runtime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_opts: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityOpts),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            shm_size: {
                value: cdktf.numberToHclTerraform(this._shmSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            start: {
                value: cdktf.booleanToHclTerraform(this._start),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            stdin_open: {
                value: cdktf.booleanToHclTerraform(this._stdinOpen),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            stop_signal: {
                value: cdktf.stringToHclTerraform(this._stopSignal),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stop_timeout: {
                value: cdktf.numberToHclTerraform(this._stopTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            storage_opts: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._storageOpts),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            sysctls: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sysctls),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            tmpfs: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tmpfs),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            tty: {
                value: cdktf.booleanToHclTerraform(this._tty),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            user: {
                value: cdktf.stringToHclTerraform(this._user),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            userns_mode: {
                value: cdktf.stringToHclTerraform(this._usernsMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            wait: {
                value: cdktf.booleanToHclTerraform(this._wait),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            wait_timeout: {
                value: cdktf.numberToHclTerraform(this._waitTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            working_dir: {
                value: cdktf.stringToHclTerraform(this._workingDir),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            capabilities: {
                value: containerCapabilitiesToHclTerraform(this._capabilities.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerCapabilitiesList",
            },
            devices: {
                value: cdktf.listMapperHcl(containerDevicesToHclTerraform, true)(this._devices.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerDevicesList",
            },
            healthcheck: {
                value: containerHealthcheckToHclTerraform(this._healthcheck.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ContainerHealthcheckList",
            },
            host: {
                value: cdktf.listMapperHcl(containerHostToHclTerraform, true)(this._host.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerHostList",
            },
            labels: {
                value: cdktf.listMapperHcl(containerLabelsToHclTerraform, true)(this._labels.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerLabelsList",
            },
            mounts: {
                value: cdktf.listMapperHcl(containerMountsToHclTerraform, true)(this._mounts.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerMountsList",
            },
            networks_advanced: {
                value: cdktf.listMapperHcl(containerNetworksAdvancedToHclTerraform, true)(this._networksAdvanced.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerNetworksAdvancedList",
            },
            ports: {
                value: cdktf.listMapperHcl(containerPortsToHclTerraform, true)(this._ports.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ContainerPortsList",
            },
            ulimit: {
                value: cdktf.listMapperHcl(containerUlimitToHclTerraform, true)(this._ulimit.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerUlimitList",
            },
            upload: {
                value: cdktf.listMapperHcl(containerUploadToHclTerraform, true)(this._upload.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerUploadList",
            },
            volumes: {
                value: cdktf.listMapperHcl(containerVolumesToHclTerraform, true)(this._volumes.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerVolumesList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.Container = Container;
// =================
// STATIC PROPERTIES
// =================
Container.tfResourceType = "docker_container";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEZBQTRGO0FBQzVGLDJDQUEyQzs7O0FBK1ozQywwRUFPQztBQUdELGdGQVFDO0FBd0dELDRFQVNDO0FBR0Qsa0ZBc0JDO0FBNkZELGtFQVVDO0FBR0Qsd0VBNEJDO0FBa0tELDBFQWFDO0FBR0QsZ0ZBOENDO0FBNEtELDREQVNDO0FBR0Qsa0VBc0JDO0FBaUhELGdFQVNDO0FBR0Qsc0VBc0JDO0FBMkdELHNGQVFDO0FBR0QsNEZBZ0JDO0FBaUVELHdGQVNDO0FBR0QsOEZBc0JDO0FBdUZELHNHQVNDO0FBR0QsNEdBc0JDO0FBbUlELDBGQVlDO0FBR0QsZ0dBd0NDO0FBdUxELGdFQWNDO0FBR0Qsc0VBb0RDO0FBMk9ELG9GQVdDO0FBR0QsMEZBa0NDO0FBNEtELDhEQVdDO0FBR0Qsb0VBa0NDO0FBc0tELGdFQVVDO0FBR0Qsc0VBNEJDO0FBa0tELGdFQWNDO0FBR0Qsc0VBb0RDO0FBb1BELGtFQVlDO0FBR0Qsd0VBd0NDO0FBL3VHRCwrQkFBK0I7QUE0Wi9CLFNBQWdCLCtCQUErQixDQUFDLE1BQTZCO0lBQzNFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU8sRUFDTixDQUFBO0FBQ0gsQ0FBQztBQUdELFNBQWdCLGtDQUFrQyxDQUFDLE1BQTZCO0lBQzlFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtB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QkFBYyxHQUFHLGtCQUFrQixBQUFyQixDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFpbmVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIElmIGB0cnVlYCBhdHRhY2ggdG8gdGhlIGNvbnRhaW5lciBhZnRlciBpdHMgY3JlYXRpb24gYW5kIHdhaXRzIHRoZSBlbmQgb2YgaXRzIGV4ZWN1dGlvbi4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjYXR0YWNoIENvbnRhaW5lciNhdHRhY2h9XG4gICovXG4gIHJlYWRvbmx5IGF0dGFjaD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogT3B0aW9uYWwgcGFyZW50IGNncm91cCBmb3IgdGhlIGNvbnRhaW5lclxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNjZ3JvdXBfcGFyZW50IENvbnRhaW5lciNjZ3JvdXBfcGFyZW50fVxuICAqL1xuICByZWFkb25seSBjZ3JvdXBQYXJlbnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIENncm91cCBuYW1lc3BhY2UgbW9kZSB0byB1c2UgZm9yIHRoZSBjb250YWluZXIuIFBvc3NpYmxlIHZhbHVlcyBhcmU6IGBwcml2YXRlYCwgYGhvc3RgLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNjZ3JvdXBuc19tb2RlIENvbnRhaW5lciNjZ3JvdXBuc19tb2RlfVxuICAqL1xuICByZWFkb25seSBjZ3JvdXBuc01vZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBjb21tYW5kIHRvIHVzZSB0byBzdGFydCB0aGUgY29udGFpbmVyLiBGb3IgZXhhbXBsZSwgdG8gcnVuIGAvdXNyL2Jpbi9teXByb2dyYW0gLWYgYmF6LmNvbmZgIHNldCB0aGUgY29tbWFuZCB0byBiZSBgW1wiL3Vzci9iaW4vbXlwcm9ncmFtXCIsXCItZlwiLFwiYmF6LmNvbmZcIl1gLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNjb21tYW5kIENvbnRhaW5lciNjb21tYW5kfVxuICAqL1xuICByZWFkb25seSBjb21tYW5kPzogc3RyaW5nW107XG4gIC8qKlxuICAqIFRoZSB0b3RhbCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgZm9yIHRoZSBjb250YWluZXIgdG8gcmVhY2ggc3RhdHVzICdydW5uaW5nJ1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNjb250YWluZXJfcmVhZF9yZWZyZXNoX3RpbWVvdXRfbWlsbGlzZWNvbmRzIENvbnRhaW5lciNjb250YWluZXJfcmVhZF9yZWZyZXNoX3RpbWVvdXRfbWlsbGlzZWNvbmRzfVxuICAqL1xuICByZWFkb25seSBjb250YWluZXJSZWFkUmVmcmVzaFRpbWVvdXRNaWxsaXNlY29uZHM/OiBudW1iZXI7XG4gIC8qKlxuICAqIFNwZWNpZnkgdGhlIENQVSBDRlMgc2NoZWR1bGVyIHBlcmlvZCAoaW4gbWljcm9zZWNvbmRzKSwgd2hpY2ggaXMgdXNlZCBhbG9uZ3NpZGUgYGNwdS1xdW90YWAuIElzIGlnbm9yZWQgaWYgYGNwdXNgIGlzIHNldC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjY3B1X3BlcmlvZCBDb250YWluZXIjY3B1X3BlcmlvZH1cbiAgKi9cbiAgcmVhZG9ubHkgY3B1UGVyaW9kPzogbnVtYmVyO1xuICAvKipcbiAgKiBJbXBvc2UgYSBDUFUgQ0ZTIHF1b3RhIG9uIHRoZSBjb250YWluZXIgKGluIG1pY3Jvc2Vjb25kcykuIFRoZSBudW1iZXIgb2YgbWljcm9zZWNvbmRzIHBlciBgY3B1LXBlcmlvZGAgdGhhdCB0aGUgY29udGFpbmVyIGlzIGxpbWl0ZWQgdG8gYmVmb3JlIHRocm90dGxlZC4gSXMgaWdub3JlZCBpZiBgY3B1c2AgaXMgc2V0LlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNjcHVfcXVvdGEgQ29udGFpbmVyI2NwdV9xdW90YX1cbiAgKi9cbiAgcmVhZG9ubHkgY3B1UXVvdGE/OiBudW1iZXI7XG4gIC8qKlxuICAqIEEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb3IgaHlwaGVuLXNlcGFyYXRlZCByYW5nZSBvZiBDUFVzIGEgY29udGFpbmVyIGNhbiB1c2UsIGUuZy4gYDAtMWAuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2NwdV9zZXQgQ29udGFpbmVyI2NwdV9zZXR9XG4gICovXG4gIHJlYWRvbmx5IGNwdVNldD86IHN0cmluZztcbiAgLyoqXG4gICogQ1BVIHNoYXJlcyAocmVsYXRpdmUgd2VpZ2h0KSBmb3IgdGhlIGNvbnRhaW5lci5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjY3B1X3NoYXJlcyBDb250YWluZXIjY3B1X3NoYXJlc31cbiAgKi9cbiAgcmVhZG9ubHkgY3B1U2hhcmVzPzogbnVtYmVyO1xuICAvKipcbiAgKiBTcGVjaWZ5IGhvdyBtdWNoIG9mIHRoZSBhdmFpbGFibGUgQ1BVIHJlc291cmNlcyBhIGNvbnRhaW5lciBjYW4gdXNlLiBlLmcgYSB2YWx1ZSBvZiAxLjUgbWVhbnMgdGhlIGNvbnRhaW5lciBpcyBndWFyYW50ZWVkIGF0IG1vc3Qgb25lIGFuZCBhIGhhbGYgb2YgdGhlIENQVXMuIEhhcyBwcmVjZWRlbmNlIG92ZXIgYGNwdV9wZXJpb2RgIGFuZCBgY3B1X3F1b3RhYC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjY3B1cyBDb250YWluZXIjY3B1c31cbiAgKi9cbiAgcmVhZG9ubHkgY3B1cz86IHN0cmluZztcbiAgLyoqXG4gICogSWYgZGVmaW5lZCB3aWxsIGF0dGVtcHQgdG8gc3RvcCB0aGUgY29udGFpbmVyIGJlZm9yZSBkZXN0cm95aW5nLiBDb250YWluZXIgd2lsbCBiZSBkZXN0cm95ZWQgYWZ0ZXIgYG5gIHNlY29uZHMgb3Igb24gc3VjY2Vzc2Z1bCBzdG9wLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNkZXN0cm95X2dyYWNlX3NlY29uZHMgQ29udGFpbmVyI2Rlc3Ryb3lfZ3JhY2Vfc2Vjb25kc31cbiAgKi9cbiAgcmVhZG9ubHkgZGVzdHJveUdyYWNlU2Vjb25kcz86IG51bWJlcjtcbiAgLyoqXG4gICogRE5TIHNlcnZlcnMgdG8gdXNlLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNkbnMgQ29udGFpbmVyI2Ruc31cbiAgKi9cbiAgcmVhZG9ubHkgZG5zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIEROUyBvcHRpb25zIHVzZWQgYnkgdGhlIEROUyBwcm92aWRlcihzKSwgc2VlIGByZXNvbHYuY29uZmAgZG9jdW1lbnRhdGlvbiBmb3IgdmFsaWQgbGlzdCBvZiBvcHRpb25zLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNkbnNfb3B0cyBDb250YWluZXIjZG5zX29wdHN9XG4gICovXG4gIHJlYWRvbmx5IGRuc09wdHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRE5TIHNlYXJjaCBkb21haW5zIHRoYXQgYXJlIHVzZWQgd2hlbiBiYXJlIHVucXVhbGlmaWVkIGhvc3RuYW1lcyBhcmUgdXNlZCBpbnNpZGUgb2YgdGhlIGNvbnRhaW5lci5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjZG5zX3NlYXJjaCBDb250YWluZXIjZG5zX3NlYXJjaH1cbiAgKi9cbiAgcmVhZG9ubHkgZG5zU2VhcmNoPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvbWFpbiBuYW1lIG9mIHRoZSBjb250YWluZXIuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2RvbWFpbm5hbWUgQ29udGFpbmVyI2RvbWFpbm5hbWV9XG4gICovXG4gIHJlYWRvbmx5IGRvbWFpbm5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBjb21tYW5kIHRvIHVzZSBhcyB0aGUgRW50cnlwb2ludCBmb3IgdGhlIGNvbnRhaW5lci4gVGhlIEVudHJ5cG9pbnQgYWxsb3dzIHlvdSB0byBjb25maWd1cmUgYSBjb250YWluZXIgdG8gcnVuIGFzIGFuIGV4ZWN1dGFibGUuIEZvciBleGFtcGxlLCB0byBydW4gYC91c3IvYmluL215cHJvZ3JhbWAgd2hlbiBzdGFydGluZyBhIGNvbnRhaW5lciwgc2V0IHRoZSBlbnRyeXBvaW50IHRvIGJlIGBcIi91c3IvYmluL215cHJvZ3JhbVwiXWAuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2VudHJ5cG9pbnQgQ29udGFpbmVyI2VudHJ5cG9pbnR9XG4gICovXG4gIHJlYWRvbmx5IGVudHJ5cG9pbnQ/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRW52aXJvbm1lbnQgdmFyaWFibGVzIHRvIHNldCBpbiB0aGUgZm9ybSBvZiBgS0VZPVZBTFVFYCwgZS5nLiBgREVCVUc9MGBcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjZW52IENvbnRhaW5lciNlbnZ9XG4gICovXG4gIHJlYWRvbmx5IGVudj86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBHUFUgZGV2aWNlcyB0byBhZGQgdG8gdGhlIGNvbnRhaW5lci4gQ3VycmVudGx5LCBvbmx5IHRoZSB2YWx1ZSBgYWxsYCBpcyBzdXBwb3J0ZWQuIFBhc3NpbmcgYW55IG90aGVyIHZhbHVlIHdpbGwgcmVzdWx0IGluIHVuZXhwZWN0ZWQgYmVoYXZpb3IuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2dwdXMgQ29udGFpbmVyI2dwdXN9XG4gICovXG4gIHJlYWRvbmx5IGdwdXM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEFkZGl0aW9uYWwgZ3JvdXBzIGZvciB0aGUgY29udGFpbmVyIHVzZXJcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjZ3JvdXBfYWRkIENvbnRhaW5lciNncm91cF9hZGR9XG4gICovXG4gIHJlYWRvbmx5IGdyb3VwQWRkPzogc3RyaW5nW107XG4gIC8qKlxuICAqIEhvc3RuYW1lIG9mIHRoZSBjb250YWluZXIuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2hvc3RuYW1lIENvbnRhaW5lciNob3N0bmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgaG9zdG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjaWQgQ29udGFpbmVyI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgSUQgb2YgdGhlIGltYWdlIHRvIGJhY2sgdGhpcyBjb250YWluZXIuIFRoZSBlYXNpZXN0IHdheSB0byBnZXQgdGhpcyB2YWx1ZSBpcyB0byB1c2UgdGhlIGBpbWFnZV9pZGAgYXR0cmlidXRlIG9mIHRoZSBgZG9ja2VyX2ltYWdlYCByZXNvdXJjZSBhcyBpcyBzaG93biBpbiB0aGUgZXhhbXBsZS5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjaW1hZ2UgQ29udGFpbmVyI2ltYWdlfVxuICAqL1xuICByZWFkb25seSBpbWFnZTogc3RyaW5nO1xuICAvKipcbiAgKiBDb25maWd1cmVkIHdoZXRoZXIgYW4gaW5pdCBwcm9jZXNzIHNob3VsZCBiZSBpbmplY3RlZCBmb3IgdGhpcyBjb250YWluZXIuIElmIHVuc2V0IHRoaXMgd2lsbCBkZWZhdWx0IHRvIHRoZSBgZG9ja2VyZGAgZGVmYXVsdHMuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2luaXQgQ29udGFpbmVyI2luaXR9XG4gICovXG4gIHJlYWRvbmx5IGluaXQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIElQQyBzaGFyaW5nIG1vZGUgZm9yIHRoZSBjb250YWluZXIuIFBvc3NpYmxlIHZhbHVlcyBhcmU6IGBub25lYCwgYHByaXZhdGVgLCBgc2hhcmVhYmxlYCwgYGNvbnRhaW5lcjo8bmFtZXxpZD5gIG9yIGBob3N0YC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjaXBjX21vZGUgQ29udGFpbmVyI2lwY19tb2RlfVxuICAqL1xuICByZWFkb25seSBpcGNNb2RlPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgbG9nZ2luZyBkcml2ZXIgdG8gdXNlIGZvciB0aGUgY29udGFpbmVyLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNsb2dfZHJpdmVyIENvbnRhaW5lciNsb2dfZHJpdmVyfVxuICAqL1xuICByZWFkb25seSBsb2dEcml2ZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEtleS92YWx1ZSBwYWlycyB0byB1c2UgYXMgb3B0aW9ucyBmb3IgdGhlIGxvZ2dpbmcgZHJpdmVyLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNsb2dfb3B0cyBDb250YWluZXIjbG9nX29wdHN9XG4gICovXG4gIHJlYWRvbmx5IGxvZ09wdHM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBTYXZlIHRoZSBjb250YWluZXIgbG9ncyAoYGF0dGFjaGAgbXVzdCBiZSBlbmFibGVkKS4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjbG9ncyBDb250YWluZXIjbG9nc31cbiAgKi9cbiAgcmVhZG9ubHkgbG9ncz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogVGhlIG1heGltdW0gYW1vdW50IG9mIHRpbWVzIHRvIGFuIGF0dGVtcHQgYSByZXN0YXJ0IHdoZW4gYHJlc3RhcnRgIGlzIHNldCB0byAnb24tZmFpbHVyZScuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI21heF9yZXRyeV9jb3VudCBDb250YWluZXIjbWF4X3JldHJ5X2NvdW50fVxuICAqL1xuICByZWFkb25seSBtYXhSZXRyeUNvdW50PzogbnVtYmVyO1xuICAvKipcbiAgKiBUaGUgbWVtb3J5IGxpbWl0IGZvciB0aGUgY29udGFpbmVyIGluIE1Ccy5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjbWVtb3J5IENvbnRhaW5lciNtZW1vcnl9XG4gICovXG4gIHJlYWRvbmx5IG1lbW9yeT86IG51bWJlcjtcbiAgLyoqXG4gICogVGhlIHRvdGFsIG1lbW9yeSBsaW1pdCAobWVtb3J5ICsgc3dhcCkgZm9yIHRoZSBjb250YWluZXIgaW4gTUJzLiBUaGlzIHNldHRpbmcgbWF5IGNvbXB1dGUgdG8gYC0xYCBhZnRlciBgdGVycmFmb3JtIGFwcGx5YCBpZiB0aGUgdGFyZ2V0IGhvc3QgZG9lc24ndCBzdXBwb3J0IG1lbW9yeSBzd2FwLCB3aGVuIHRoYXQgaXMgdGhlIGNhc2UgZG9ja2VyIHdpbGwgdXNlIGEgc29mdCBsaW1pdGF0aW9uLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNtZW1vcnlfc3dhcCBDb250YWluZXIjbWVtb3J5X3N3YXB9XG4gICovXG4gIHJlYWRvbmx5IG1lbW9yeVN3YXA/OiBudW1iZXI7XG4gIC8qKlxuICAqIElmIGB0cnVlYCwgdGhlbiB0aGUgRG9ja2VyIGNvbnRhaW5lciB3aWxsIGJlIGtlcHQgcnVubmluZy4gSWYgYGZhbHNlYCwgdGhlbiBhcyBsb25nIGFzIHRoZSBjb250YWluZXIgZXhpc3RzLCBUZXJyYWZvcm0gYXNzdW1lcyBpdCBpcyBzdWNjZXNzZnVsLiBEZWZhdWx0cyB0byBgdHJ1ZWAuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI211c3RfcnVuIENvbnRhaW5lciNtdXN0X3J1bn1cbiAgKi9cbiAgcmVhZG9ubHkgbXVzdFJ1bj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogVGhlIG5hbWUgb2YgdGhlIGNvbnRhaW5lci5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjbmFtZSBDb250YWluZXIjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBOZXR3b3JrIG1vZGUgb2YgdGhlIGNvbnRhaW5lci4gU2VlIGh0dHBzOi8vZG9jcy5kb2NrZXIuY29tL2VuZ2luZS9uZXR3b3JrLyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjbmV0d29ya19tb2RlIENvbnRhaW5lciNuZXR3b3JrX21vZGV9XG4gICovXG4gIHJlYWRvbmx5IG5ldHdvcmtNb2RlPzogc3RyaW5nO1xuICAvKipcbiAgKiBoZSBQSUQgKFByb2Nlc3MpIE5hbWVzcGFjZSBtb2RlIGZvciB0aGUgY29udGFpbmVyLiBFaXRoZXIgYGNvbnRhaW5lcjo8bmFtZXxpZD5gIG9yIGBob3N0YC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjcGlkX21vZGUgQ29udGFpbmVyI3BpZF9tb2RlfVxuICAqL1xuICByZWFkb25seSBwaWRNb2RlPzogc3RyaW5nO1xuICAvKipcbiAgKiBJZiBgdHJ1ZWAsIHRoZSBjb250YWluZXIgcnVucyBpbiBwcml2aWxlZ2VkIG1vZGUuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3ByaXZpbGVnZWQgQ29udGFpbmVyI3ByaXZpbGVnZWR9XG4gICovXG4gIHJlYWRvbmx5IHByaXZpbGVnZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIFB1Ymxpc2ggYWxsIHBvcnRzIG9mIHRoZSBjb250YWluZXIuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3B1Ymxpc2hfYWxsX3BvcnRzIENvbnRhaW5lciNwdWJsaXNoX2FsbF9wb3J0c31cbiAgKi9cbiAgcmVhZG9ubHkgcHVibGlzaEFsbFBvcnRzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBJZiBgdHJ1ZWAsIHRoZSBjb250YWluZXIgd2lsbCBiZSBzdGFydGVkIGFzIHJlYWRvbmx5LiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNyZWFkX29ubHkgQ29udGFpbmVyI3JlYWRfb25seX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVhZE9ubHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIElmIGB0cnVlYCwgaXQgd2lsbCByZW1vdmUgYW5vbnltb3VzIHZvbHVtZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250YWluZXIuIERlZmF1bHRzIHRvIGB0cnVlYC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjcmVtb3ZlX3ZvbHVtZXMgQ29udGFpbmVyI3JlbW92ZV92b2x1bWVzfVxuICAqL1xuICByZWFkb25seSByZW1vdmVWb2x1bWVzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBUaGUgcmVzdGFydCBwb2xpY3kgZm9yIHRoZSBjb250YWluZXIuIE11c3QgYmUgb25lIG9mICdubycsICdvbi1mYWlsdXJlJywgJ2Fsd2F5cycsICd1bmxlc3Mtc3RvcHBlZCcuIERlZmF1bHRzIHRvIGBub2AuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3Jlc3RhcnQgQ29udGFpbmVyI3Jlc3RhcnR9XG4gICovXG4gIHJlYWRvbmx5IHJlc3RhcnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIElmIGB0cnVlYCwgdGhlbiB0aGUgY29udGFpbmVyIHdpbGwgYmUgYXV0b21hdGljYWxseSByZW1vdmVkIHdoZW4gaXQgZXhpdHMuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3JtIENvbnRhaW5lciNybX1cbiAgKi9cbiAgcmVhZG9ubHkgcm0/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIFJ1bnRpbWUgdG8gdXNlIGZvciB0aGUgY29udGFpbmVyLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNydW50aW1lIENvbnRhaW5lciNydW50aW1lfVxuICAqL1xuICByZWFkb25seSBydW50aW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBMaXN0IG9mIHN0cmluZyB2YWx1ZXMgdG8gY3VzdG9taXplIGxhYmVscyBmb3IgTUxTIHN5c3RlbXMsIHN1Y2ggYXMgU0VMaW51eC4gU2VlIGh0dHBzOi8vZG9jcy5kb2NrZXIuY29tL2VuZ2luZS9yZWZlcmVuY2UvcnVuLyNzZWN1cml0eS1jb25maWd1cmF0aW9uLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNzZWN1cml0eV9vcHRzIENvbnRhaW5lciNzZWN1cml0eV9vcHRzfVxuICAqL1xuICByZWFkb25seSBzZWN1cml0eU9wdHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogU2l6ZSBvZiBgL2Rldi9zaG1gIGluIE1Ccy5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjc2htX3NpemUgQ29udGFpbmVyI3NobV9zaXplfVxuICAqL1xuICByZWFkb25seSBzaG1TaXplPzogbnVtYmVyO1xuICAvKipcbiAgKiBJZiBgdHJ1ZWAsIHRoZW4gdGhlIERvY2tlciBjb250YWluZXIgd2lsbCBiZSBzdGFydGVkIGFmdGVyIGNyZWF0aW9uLiBJZiBgZmFsc2VgLCB0aGVuIHRoZSBjb250YWluZXIgaXMgb25seSBjcmVhdGVkLiBEZWZhdWx0cyB0byBgdHJ1ZWAuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3N0YXJ0IENvbnRhaW5lciNzdGFydH1cbiAgKi9cbiAgcmVhZG9ubHkgc3RhcnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIElmIGB0cnVlYCwga2VlcCBTVERJTiBvcGVuIGV2ZW4gaWYgbm90IGF0dGFjaGVkIChgZG9ja2VyIHJ1biAtaWApLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNzdGRpbl9vcGVuIENvbnRhaW5lciNzdGRpbl9vcGVufVxuICAqL1xuICByZWFkb25seSBzdGRpbk9wZW4/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIFNpZ25hbCB0byBzdG9wIGEgY29udGFpbmVyIChkZWZhdWx0IGBTSUdURVJNYCkuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3N0b3Bfc2lnbmFsIENvbnRhaW5lciNzdG9wX3NpZ25hbH1cbiAgKi9cbiAgcmVhZG9ubHkgc3RvcFNpZ25hbD86IHN0cmluZztcbiAgLyoqXG4gICogVGltZW91dCAoaW4gc2Vjb25kcykgdG8gc3RvcCBhIGNvbnRhaW5lci5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjc3RvcF90aW1lb3V0IENvbnRhaW5lciNzdG9wX3RpbWVvdXR9XG4gICovXG4gIHJlYWRvbmx5IHN0b3BUaW1lb3V0PzogbnVtYmVyO1xuICAvKipcbiAgKiBLZXkvdmFsdWUgcGFpcnMgZm9yIHRoZSBzdG9yYWdlIGRyaXZlciBvcHRpb25zLCBlLmcuIGBzaXplYDogYDEyMEdgXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3N0b3JhZ2Vfb3B0cyBDb250YWluZXIjc3RvcmFnZV9vcHRzfVxuICAqL1xuICByZWFkb25seSBzdG9yYWdlT3B0cz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIEEgbWFwIG9mIGtlcm5lbCBwYXJhbWV0ZXJzIChzeXNjdGxzKSB0byBzZXQgaW4gdGhlIGNvbnRhaW5lci5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjc3lzY3RscyBDb250YWluZXIjc3lzY3Rsc31cbiAgKi9cbiAgcmVhZG9ubHkgc3lzY3Rscz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIEEgbWFwIG9mIGNvbnRhaW5lciBkaXJlY3RvcmllcyB3aGljaCBzaG91bGQgYmUgcmVwbGFjZWQgYnkgYHRtcGZzIG1vdW50c2AsIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG1vdW50IG9wdGlvbnMuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3RtcGZzIENvbnRhaW5lciN0bXBmc31cbiAgKi9cbiAgcmVhZG9ubHkgdG1wZnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBJZiBgdHJ1ZWAsIGFsbG9jYXRlIGEgcHNldWRvLXR0eSAoYGRvY2tlciBydW4gLXRgKS4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjdHR5IENvbnRhaW5lciN0dHl9XG4gICovXG4gIHJlYWRvbmx5IHR0eT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogVXNlciB1c2VkIGZvciBydW4gdGhlIGZpcnN0IHByb2Nlc3MuIEZvcm1hdCBpcyBgdXNlcmAgb3IgYHVzZXI6Z3JvdXBgIHdoaWNoIHVzZXIgYW5kIGdyb3VwIGNhbiBiZSBwYXNzZWQgbGl0ZXJyYWx5IG9yIGJ5IG5hbWUuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3VzZXIgQ29udGFpbmVyI3VzZXJ9XG4gICovXG4gIHJlYWRvbmx5IHVzZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFNldHMgdGhlIHVzZXJuYW1lc3BhY2UgbW9kZSBmb3IgdGhlIGNvbnRhaW5lciB3aGVuIHVzZXJuYW1lc3BhY2UgcmVtYXBwaW5nIG9wdGlvbiBpcyBlbmFibGVkLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciN1c2VybnNfbW9kZSBDb250YWluZXIjdXNlcm5zX21vZGV9XG4gICovXG4gIHJlYWRvbmx5IHVzZXJuc01vZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIElmIGB0cnVlYCwgdGhlbiB0aGUgRG9ja2VyIGNvbnRhaW5lciBpcyB3YWl0ZWQgZm9yIGJlaW5nIGhlYWx0aHkgc3RhdGUgYWZ0ZXIgY3JlYXRpb24uIFRoaXMgcmVxdWlyZXMgeW91ciBjb250YWluZXIgdG8gaGF2ZSBhIGhlYWx0aGNoZWNrLCBvdGhlcndpc2UgdGhpcyBwcm92aWRlciB3aWxsIGVycm9yLiBJZiBgZmFsc2VgLCB0aGVuIHRoZSBjb250YWluZXIgaGVhbHRoIHN0YXRlIGlzIG5vdCBjaGVja2VkLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciN3YWl0IENvbnRhaW5lciN3YWl0fVxuICAqL1xuICByZWFkb25seSB3YWl0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBUaGUgdGltZW91dCBpbiBzZWNvbmRzIHRvIHdhaXQgdGhlIGNvbnRhaW5lciB0byBiZSBoZWFsdGh5IGFmdGVyIGNyZWF0aW9uLiBEZWZhdWx0cyB0byBgNjBgLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciN3YWl0X3RpbWVvdXQgQ29udGFpbmVyI3dhaXRfdGltZW91dH1cbiAgKi9cbiAgcmVhZG9ubHkgd2FpdFRpbWVvdXQ/OiBudW1iZXI7XG4gIC8qKlxuICAqIFRoZSB3b3JraW5nIGRpcmVjdG9yeSBmb3IgY29tbWFuZHMgdG8gcnVuIGluLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciN3b3JraW5nX2RpciBDb250YWluZXIjd29ya2luZ19kaXJ9XG4gICovXG4gIHJlYWRvbmx5IHdvcmtpbmdEaXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGNhcGFiaWxpdGllcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNjYXBhYmlsaXRpZXMgQ29udGFpbmVyI2NhcGFiaWxpdGllc31cbiAgKi9cbiAgcmVhZG9ubHkgY2FwYWJpbGl0aWVzPzogQ29udGFpbmVyQ2FwYWJpbGl0aWVzO1xuICAvKipcbiAgKiBkZXZpY2VzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2RldmljZXMgQ29udGFpbmVyI2RldmljZXN9XG4gICovXG4gIHJlYWRvbmx5IGRldmljZXM/OiBDb250YWluZXJEZXZpY2VzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogaGVhbHRoY2hlY2sgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjaGVhbHRoY2hlY2sgQ29udGFpbmVyI2hlYWx0aGNoZWNrfVxuICAqL1xuICByZWFkb25seSBoZWFsdGhjaGVjaz86IENvbnRhaW5lckhlYWx0aGNoZWNrO1xuICAvKipcbiAgKiBob3N0IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2hvc3QgQ29udGFpbmVyI2hvc3R9XG4gICovXG4gIHJlYWRvbmx5IGhvc3Q/OiBDb250YWluZXJIb3N0W10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogbGFiZWxzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2xhYmVscyBDb250YWluZXIjbGFiZWxzfVxuICAqL1xuICByZWFkb25seSBsYWJlbHM/OiBDb250YWluZXJMYWJlbHNbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBtb3VudHMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjbW91bnRzIENvbnRhaW5lciNtb3VudHN9XG4gICovXG4gIHJlYWRvbmx5IG1vdW50cz86IENvbnRhaW5lck1vdW50c1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIG5ldHdvcmtzX2FkdmFuY2VkIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI25ldHdvcmtzX2FkdmFuY2VkIENvbnRhaW5lciNuZXR3b3Jrc19hZHZhbmNlZH1cbiAgKi9cbiAgcmVhZG9ubHkgbmV0d29ya3NBZHZhbmNlZD86IENvbnRhaW5lck5ldHdvcmtzQWR2YW5jZWRbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBwb3J0cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNwb3J0cyBDb250YWluZXIjcG9ydHN9XG4gICovXG4gIHJlYWRvbmx5IHBvcnRzPzogQ29udGFpbmVyUG9ydHNbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiB1bGltaXQgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjdWxpbWl0IENvbnRhaW5lciN1bGltaXR9XG4gICovXG4gIHJlYWRvbmx5IHVsaW1pdD86IENvbnRhaW5lclVsaW1pdFtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHVwbG9hZCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciN1cGxvYWQgQ29udGFpbmVyI3VwbG9hZH1cbiAgKi9cbiAgcmVhZG9ubHkgdXBsb2FkPzogQ29udGFpbmVyVXBsb2FkW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogdm9sdW1lcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciN2b2x1bWVzIENvbnRhaW5lciN2b2x1bWVzfVxuICAqL1xuICByZWFkb25seSB2b2x1bWVzPzogQ29udGFpbmVyVm9sdW1lc1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5lck5ldHdvcmtEYXRhIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lck5ldHdvcmtEYXRhVG9UZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVyTmV0d29ya0RhdGEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVyTmV0d29ya0RhdGFUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDb250YWluZXJOZXR3b3JrRGF0YSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gIH07XG4gIHJldHVybiBhdHRycztcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRhaW5lck5ldHdvcmtEYXRhT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvbnRhaW5lck5ldHdvcmtEYXRhIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb250YWluZXJOZXR3b3JrRGF0YSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdhdGV3YXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnYXRld2F5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2F0ZXdheScpO1xuICB9XG5cbiAgLy8gZ2xvYmFsX2lwdjZfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdsb2JhbElwdjZBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2xvYmFsX2lwdjZfYWRkcmVzcycpO1xuICB9XG5cbiAgLy8gZ2xvYmFsX2lwdjZfcHJlZml4X2xlbmd0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdsb2JhbElwdjZQcmVmaXhMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdnbG9iYWxfaXB2Nl9wcmVmaXhfbGVuZ3RoJyk7XG4gIH1cblxuICAvLyBpcF9hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXBBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXBfYWRkcmVzcycpO1xuICB9XG5cbiAgLy8gaXBfcHJlZml4X2xlbmd0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlwUHJlZml4TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaXBfcHJlZml4X2xlbmd0aCcpO1xuICB9XG5cbiAgLy8gaXB2Nl9nYXRld2F5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXB2NkdhdGV3YXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpcHY2X2dhdGV3YXknKTtcbiAgfVxuXG4gIC8vIG1hY19hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFjQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21hY19hZGRyZXNzJyk7XG4gIH1cblxuICAvLyBuZXR3b3JrX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuZXR3b3JrTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25ldHdvcmtfbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXJOZXR3b3JrRGF0YUxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogQ29udGFpbmVyTmV0d29ya0RhdGFPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgQ29udGFpbmVyTmV0d29ya0RhdGFPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb250YWluZXJDYXBhYmlsaXRpZXMge1xuICAvKipcbiAgKiBMaXN0IG9mIGxpbnV4IGNhcGFiaWxpdGllcyB0byBhZGQuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2FkZCBDb250YWluZXIjYWRkfVxuICAqL1xuICByZWFkb25seSBhZGQ/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogTGlzdCBvZiBsaW51eCBjYXBhYmlsaXRpZXMgdG8gZHJvcC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjZHJvcCBDb250YWluZXIjZHJvcH1cbiAgKi9cbiAgcmVhZG9ubHkgZHJvcD86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVyQ2FwYWJpbGl0aWVzVG9UZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVyQ2FwYWJpbGl0aWVzT3V0cHV0UmVmZXJlbmNlIHwgQ29udGFpbmVyQ2FwYWJpbGl0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFkZDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuYWRkKSxcbiAgICBkcm9wOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5kcm9wKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZXJDYXBhYmlsaXRpZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDb250YWluZXJDYXBhYmlsaXRpZXNPdXRwdXRSZWZlcmVuY2UgfCBDb250YWluZXJDYXBhYmlsaXRpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFkZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmFkZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIGRyb3A6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5kcm9wKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXJDYXBhYmlsaXRpZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvbnRhaW5lckNhcGFiaWxpdGllcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWRkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFkZCA9IHRoaXMuX2FkZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Ryb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZHJvcCA9IHRoaXMuX2Ryb3A7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb250YWluZXJDYXBhYmlsaXRpZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hZGQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kcm9wID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hZGQgPSB2YWx1ZS5hZGQ7XG4gICAgICB0aGlzLl9kcm9wID0gdmFsdWUuZHJvcDtcbiAgICB9XG4gIH1cblxuICAvLyBhZGQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWRkPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGFkZCgpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWRkJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWRkKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FkZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFkZCgpIHtcbiAgICB0aGlzLl9hZGQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFkZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZGQ7XG4gIH1cblxuICAvLyBkcm9wIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Ryb3A/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZHJvcCgpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZHJvcCcpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRyb3AodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZHJvcCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERyb3AoKSB7XG4gICAgdGhpcy5fZHJvcCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZHJvcElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kcm9wO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5lckRldmljZXMge1xuICAvKipcbiAgKiBUaGUgcGF0aCBpbiB0aGUgY29udGFpbmVyIHdoZXJlIHRoZSBkZXZpY2Ugd2lsbCBiZSBib3VuZC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjY29udGFpbmVyX3BhdGggQ29udGFpbmVyI2NvbnRhaW5lcl9wYXRofVxuICAqL1xuICByZWFkb25seSBjb250YWluZXJQYXRoPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgcGF0aCBvbiB0aGUgaG9zdCB3aGVyZSB0aGUgZGV2aWNlIGlzIGxvY2F0ZWQuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2hvc3RfcGF0aCBDb250YWluZXIjaG9zdF9wYXRofVxuICAqL1xuICByZWFkb25seSBob3N0UGF0aDogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgY2dyb3VwIHBlcm1pc3Npb25zIGdpdmVuIHRvIHRoZSBjb250YWluZXIgdG8gYWNjZXNzIHRoZSBkZXZpY2UuIERlZmF1bHRzIHRvIGByd21gLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNwZXJtaXNzaW9ucyBDb250YWluZXIjcGVybWlzc2lvbnN9XG4gICovXG4gIHJlYWRvbmx5IHBlcm1pc3Npb25zPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVyRGV2aWNlc1RvVGVycmFmb3JtKHN0cnVjdD86IENvbnRhaW5lckRldmljZXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXJfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWluZXJQYXRoKSxcbiAgICBob3N0X3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdFBhdGgpLFxuICAgIHBlcm1pc3Npb25zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBlcm1pc3Npb25zKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZXJEZXZpY2VzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVyRGV2aWNlcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjb250YWluZXJfcGF0aDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29udGFpbmVyUGF0aCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaG9zdF9wYXRoOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ob3N0UGF0aCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcGVybWlzc2lvbnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnBlcm1pc3Npb25zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckRldmljZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29udGFpbmVyRGV2aWNlcyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyUGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb250YWluZXJQYXRoID0gdGhpcy5fY29udGFpbmVyUGF0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvc3RQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmhvc3RQYXRoID0gdGhpcy5faG9zdFBhdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wZXJtaXNzaW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wZXJtaXNzaW9ucyA9IHRoaXMuX3Blcm1pc3Npb25zO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29udGFpbmVyRGV2aWNlcyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb250YWluZXJQYXRoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faG9zdFBhdGggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb250YWluZXJQYXRoID0gdmFsdWUuY29udGFpbmVyUGF0aDtcbiAgICAgIHRoaXMuX2hvc3RQYXRoID0gdmFsdWUuaG9zdFBhdGg7XG4gICAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHZhbHVlLnBlcm1pc3Npb25zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbnRhaW5lcl9wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRhaW5lclBhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lclBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250YWluZXJfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGFpbmVyUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGFpbmVyUGF0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRhaW5lclBhdGgoKSB7XG4gICAgdGhpcy5fY29udGFpbmVyUGF0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGFpbmVyUGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJQYXRoO1xuICB9XG5cbiAgLy8gaG9zdF9wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2hvc3RQYXRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob3N0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaG9zdFBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3RQYXRoID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhvc3RQYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3RQYXRoO1xuICB9XG5cbiAgLy8gcGVybWlzc2lvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGVybWlzc2lvbnM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGVybWlzc2lvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBlcm1pc3Npb25zKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBlcm1pc3Npb25zKCkge1xuICAgIHRoaXMuX3Blcm1pc3Npb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwZXJtaXNzaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJtaXNzaW9ucztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyRGV2aWNlc0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IENvbnRhaW5lckRldmljZXNbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogQ29udGFpbmVyRGV2aWNlc091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBDb250YWluZXJEZXZpY2VzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFpbmVySGVhbHRoY2hlY2sge1xuICAvKipcbiAgKiBUaW1lIGJldHdlZW4gcnVubmluZyB0aGUgY2hlY2sgKG1zfHN8bXxoKS4gRGVmYXVsdHMgdG8gYDBzYC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjaW50ZXJ2YWwgQ29udGFpbmVyI2ludGVydmFsfVxuICAqL1xuICByZWFkb25seSBpbnRlcnZhbD86IHN0cmluZztcbiAgLyoqXG4gICogQ29uc2VjdXRpdmUgZmFpbHVyZXMgbmVlZGVkIHRvIHJlcG9ydCB1bmhlYWx0aHkuIERlZmF1bHRzIHRvIGAwYC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjcmV0cmllcyBDb250YWluZXIjcmV0cmllc31cbiAgKi9cbiAgcmVhZG9ubHkgcmV0cmllcz86IG51bWJlcjtcbiAgLyoqXG4gICogSW50ZXJ2YWwgYmVmb3JlIHRoZSBoZWFsdGhjaGVjayBzdGFydHMgKG1zfHN8bXxoKS4gRGVmYXVsdHMgdG8gYDBzYC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjc3RhcnRfaW50ZXJ2YWwgQ29udGFpbmVyI3N0YXJ0X2ludGVydmFsfVxuICAqL1xuICByZWFkb25seSBzdGFydEludGVydmFsPzogc3RyaW5nO1xuICAvKipcbiAgKiBTdGFydCBwZXJpb2QgZm9yIHRoZSBjb250YWluZXIgdG8gaW5pdGlhbGl6ZSBiZWZvcmUgY291bnRpbmcgcmV0cmllcyB0b3dhcmRzIHVuc3RhYmxlIChtc3xzfG18aCkuIERlZmF1bHRzIHRvIGAwc2AuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3N0YXJ0X3BlcmlvZCBDb250YWluZXIjc3RhcnRfcGVyaW9kfVxuICAqL1xuICByZWFkb25seSBzdGFydFBlcmlvZD86IHN0cmluZztcbiAgLyoqXG4gICogQ29tbWFuZCB0byBydW4gdG8gY2hlY2sgaGVhbHRoLiBGb3IgZXhhbXBsZSwgdG8gcnVuIGBjdXJsIC1mIGxvY2FsaG9zdC9oZWFsdGhgIHNldCB0aGUgY29tbWFuZCB0byBiZSBgW1wiQ01EXCIsIFwiY3VybFwiLCBcIi1mXCIsIFwibG9jYWxob3N0L2hlYWx0aFwiXWAuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3Rlc3QgQ29udGFpbmVyI3Rlc3R9XG4gICovXG4gIHJlYWRvbmx5IHRlc3Q6IHN0cmluZ1tdO1xuICAvKipcbiAgKiBNYXhpbXVtIHRpbWUgdG8gYWxsb3cgb25lIGNoZWNrIHRvIHJ1biAobXN8c3xtfGgpLiBEZWZhdWx0cyB0byBgMHNgLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciN0aW1lb3V0IENvbnRhaW5lciN0aW1lb3V0fVxuICAqL1xuICByZWFkb25seSB0aW1lb3V0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVySGVhbHRoY2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb250YWluZXJIZWFsdGhjaGVja091dHB1dFJlZmVyZW5jZSB8IENvbnRhaW5lckhlYWx0aGNoZWNrKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGludGVydmFsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmludGVydmFsKSxcbiAgICByZXRyaWVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnJldHJpZXMpLFxuICAgIHN0YXJ0X2ludGVydmFsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0SW50ZXJ2YWwpLFxuICAgIHN0YXJ0X3BlcmlvZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGFydFBlcmlvZCksXG4gICAgdGVzdDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEudGVzdCksXG4gICAgdGltZW91dDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZXJIZWFsdGhjaGVja1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IENvbnRhaW5lckhlYWx0aGNoZWNrT3V0cHV0UmVmZXJlbmNlIHwgQ29udGFpbmVySGVhbHRoY2hlY2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGludGVydmFsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbnRlcnZhbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcmV0cmllczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEucmV0cmllcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgc3RhcnRfaW50ZXJ2YWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0SW50ZXJ2YWwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHN0YXJ0X3BlcmlvZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3RhcnRQZXJpb2QpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHRlc3Q6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS50ZXN0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIHRpbWVvdXQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRpbWVvdXQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udGFpbmVySGVhbHRoY2hlY2tPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvbnRhaW5lckhlYWx0aGNoZWNrIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnRlcnZhbCA9IHRoaXMuX2ludGVydmFsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmV0cmllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXRyaWVzID0gdGhpcy5fcmV0cmllcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXJ0SW50ZXJ2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhcnRJbnRlcnZhbCA9IHRoaXMuX3N0YXJ0SW50ZXJ2YWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGFydFBlcmlvZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdGFydFBlcmlvZCA9IHRoaXMuX3N0YXJ0UGVyaW9kO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50ZXN0ID0gdGhpcy5fdGVzdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWVvdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb250YWluZXJIZWFsdGhjaGVjayB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmV0cmllcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXJ0SW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGFydFBlcmlvZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rlc3QgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHZhbHVlLmludGVydmFsO1xuICAgICAgdGhpcy5fcmV0cmllcyA9IHZhbHVlLnJldHJpZXM7XG4gICAgICB0aGlzLl9zdGFydEludGVydmFsID0gdmFsdWUuc3RhcnRJbnRlcnZhbDtcbiAgICAgIHRoaXMuX3N0YXJ0UGVyaW9kID0gdmFsdWUuc3RhcnRQZXJpb2Q7XG4gICAgICB0aGlzLl90ZXN0ID0gdmFsdWUudGVzdDtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSB2YWx1ZS50aW1lb3V0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGludGVydmFsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ludGVydmFsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ludGVydmFsJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnRlcnZhbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XG4gIH1cblxuICAvLyByZXRyaWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JldHJpZXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHJldHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdyZXRyaWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXRyaWVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yZXRyaWVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmV0cmllcygpIHtcbiAgICB0aGlzLl9yZXRyaWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXRyaWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHJpZXM7XG4gIH1cblxuICAvLyBzdGFydF9pbnRlcnZhbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGFydEludGVydmFsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGFydEludGVydmFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhcnRfaW50ZXJ2YWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXJ0SW50ZXJ2YWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXJ0SW50ZXJ2YWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGFydEludGVydmFsKCkge1xuICAgIHRoaXMuX3N0YXJ0SW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXJ0SW50ZXJ2YWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRJbnRlcnZhbDtcbiAgfVxuXG4gIC8vIHN0YXJ0X3BlcmlvZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGFydFBlcmlvZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhcnRQZXJpb2QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGFydF9wZXJpb2QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXJ0UGVyaW9kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGFydFBlcmlvZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXJ0UGVyaW9kKCkge1xuICAgIHRoaXMuX3N0YXJ0UGVyaW9kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGFydFBlcmlvZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydFBlcmlvZDtcbiAgfVxuXG4gIC8vIHRlc3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGVzdD86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0ZXN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3Rlc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRlc3QodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdGVzdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0ZXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rlc3Q7XG4gIH1cblxuICAvLyB0aW1lb3V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0aW1lb3V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lb3V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aW1lb3V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZW91dCgpIHtcbiAgICB0aGlzLl90aW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFpbmVySG9zdCB7XG4gIC8qKlxuICAqIEhvc3RuYW1lIHRvIGFkZFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNob3N0IENvbnRhaW5lciNob3N0fVxuICAqL1xuICByZWFkb25seSBob3N0OiBzdHJpbmc7XG4gIC8qKlxuICAqIElQIGFkZHJlc3MgdGhpcyBob3N0bmFtZSBzaG91bGQgcmVzb2x2ZSB0by5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjaXAgQ29udGFpbmVyI2lwfVxuICAqL1xuICByZWFkb25seSBpcDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVySG9zdFRvVGVycmFmb3JtKHN0cnVjdD86IENvbnRhaW5lckhvc3QgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIGlwOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlwKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZXJIb3N0VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVySG9zdCB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBob3N0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpcDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaXApLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udGFpbmVySG9zdE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb250YWluZXJIb3N0IHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9ob3N0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmhvc3QgPSB0aGlzLl9ob3N0O1xuICAgIH1cbiAgICBpZiAodGhpcy5faXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaXAgPSB0aGlzLl9pcDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvbnRhaW5lckhvc3QgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faG9zdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lwID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hvc3QgPSB2YWx1ZS5ob3N0O1xuICAgICAgdGhpcy5faXAgPSB2YWx1ZS5pcDtcbiAgICB9XG4gIH1cblxuICAvLyBob3N0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2hvc3Q/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBob3N0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhvc3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdDtcbiAgfVxuXG4gIC8vIGlwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lwJyk7XG4gIH1cbiAgcHVibGljIHNldCBpcCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faXAgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckhvc3RMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBDb250YWluZXJIb3N0W10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IENvbnRhaW5lckhvc3RPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgQ29udGFpbmVySG9zdE91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5lckxhYmVscyB7XG4gIC8qKlxuICAqIE5hbWUgb2YgdGhlIGxhYmVsXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2xhYmVsIENvbnRhaW5lciNsYWJlbH1cbiAgKi9cbiAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICogVmFsdWUgb2YgdGhlIGxhYmVsXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3ZhbHVlIENvbnRhaW5lciN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lckxhYmVsc1RvVGVycmFmb3JtKHN0cnVjdD86IENvbnRhaW5lckxhYmVscyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxhYmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhYmVsKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVyTGFiZWxzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVyTGFiZWxzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGxhYmVsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sYWJlbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckxhYmVsc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb250YWluZXJMYWJlbHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxhYmVsID0gdGhpcy5fbGFiZWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29udGFpbmVyTGFiZWxzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhYmVsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZS5sYWJlbDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gbGFiZWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbGFiZWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFiZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYWJlbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckxhYmVsc0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IENvbnRhaW5lckxhYmVsc1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBDb250YWluZXJMYWJlbHNPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgQ29udGFpbmVyTGFiZWxzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFpbmVyTW91bnRzQmluZE9wdGlvbnMge1xuICAvKipcbiAgKiBBIHByb3BhZ2F0aW9uIG1vZGUgd2l0aCB0aGUgdmFsdWUuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3Byb3BhZ2F0aW9uIENvbnRhaW5lciNwcm9wYWdhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvcGFnYXRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZXJNb3VudHNCaW5kT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IENvbnRhaW5lck1vdW50c0JpbmRPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgQ29udGFpbmVyTW91bnRzQmluZE9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcGFnYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvcGFnYXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lck1vdW50c0JpbmRPcHRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVyTW91bnRzQmluZE9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBDb250YWluZXJNb3VudHNCaW5kT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgcHJvcGFnYXRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByb3BhZ2F0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRhaW5lck1vdW50c0JpbmRPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb250YWluZXJNb3VudHNCaW5kT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvcGFnYXRpb24gPSB0aGlzLl9wcm9wYWdhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvbnRhaW5lck1vdW50c0JpbmRPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcHJvcGFnYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Byb3BhZ2F0aW9uID0gdmFsdWUucHJvcGFnYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gcHJvcGFnYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvcGFnYXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByb3BhZ2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvcGFnYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb3BhZ2F0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9wYWdhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuX3Byb3BhZ2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9wYWdhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9wYWdhdGlvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb250YWluZXJNb3VudHNUbXBmc09wdGlvbnMge1xuICAvKipcbiAgKiBUaGUgcGVybWlzc2lvbiBtb2RlIGZvciB0aGUgdG1wZnMgbW91bnQgaW4gYW4gaW50ZWdlci5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjbW9kZSBDb250YWluZXIjbW9kZX1cbiAgKi9cbiAgcmVhZG9ubHkgbW9kZT86IG51bWJlcjtcbiAgLyoqXG4gICogVGhlIHNpemUgZm9yIHRoZSB0bXBmcyBtb3VudCBpbiBieXRlcy5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjc2l6ZV9ieXRlcyBDb250YWluZXIjc2l6ZV9ieXRlc31cbiAgKi9cbiAgcmVhZG9ubHkgc2l6ZUJ5dGVzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVyTW91bnRzVG1wZnNPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVyTW91bnRzVG1wZnNPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgQ29udGFpbmVyTW91bnRzVG1wZnNPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1vZGU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubW9kZSksXG4gICAgc2l6ZV9ieXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zaXplQnl0ZXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lck1vdW50c1RtcGZzT3B0aW9uc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IENvbnRhaW5lck1vdW50c1RtcGZzT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IENvbnRhaW5lck1vdW50c1RtcGZzT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbW9kZToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEubW9kZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgc2l6ZV9ieXRlczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2l6ZUJ5dGVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRhaW5lck1vdW50c1RtcGZzT3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29udGFpbmVyTW91bnRzVG1wZnNPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1vZGUgPSB0aGlzLl9tb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2l6ZUJ5dGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNpemVCeXRlcyA9IHRoaXMuX3NpemVCeXRlcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvbnRhaW5lck1vdW50c1RtcGZzT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zaXplQnl0ZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX21vZGUgPSB2YWx1ZS5tb2RlO1xuICAgICAgdGhpcy5fc2l6ZUJ5dGVzID0gdmFsdWUuc2l6ZUJ5dGVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9kZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1vZGUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNb2RlKCkge1xuICAgIHRoaXMuX21vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIC8vIHNpemVfYnl0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2l6ZUJ5dGVzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBzaXplQnl0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzaXplX2J5dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzaXplQnl0ZXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NpemVCeXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNpemVCeXRlcygpIHtcbiAgICB0aGlzLl9zaXplQnl0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNpemVCeXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaXplQnl0ZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9uc0xhYmVscyB7XG4gIC8qKlxuICAqIE5hbWUgb2YgdGhlIGxhYmVsXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2xhYmVsIENvbnRhaW5lciNsYWJlbH1cbiAgKi9cbiAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICogVmFsdWUgb2YgdGhlIGxhYmVsXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3ZhbHVlIENvbnRhaW5lciN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lck1vdW50c1ZvbHVtZU9wdGlvbnNMYWJlbHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb250YWluZXJNb3VudHNWb2x1bWVPcHRpb25zTGFiZWxzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGFiZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGFiZWwpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZXJNb3VudHNWb2x1bWVPcHRpb25zTGFiZWxzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9uc0xhYmVscyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBsYWJlbDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubGFiZWwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHZhbHVlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXJNb3VudHNWb2x1bWVPcHRpb25zTGFiZWxzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvbnRhaW5lck1vdW50c1ZvbHVtZU9wdGlvbnNMYWJlbHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxhYmVsID0gdGhpcy5fbGFiZWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9uc0xhYmVscyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWUubGFiZWw7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxhYmVsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xhYmVsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhYmVsJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYWJlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGFiZWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXJNb3VudHNWb2x1bWVPcHRpb25zTGFiZWxzTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogQ29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9uc0xhYmVsc1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBDb250YWluZXJNb3VudHNWb2x1bWVPcHRpb25zTGFiZWxzT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IENvbnRhaW5lck1vdW50c1ZvbHVtZU9wdGlvbnNMYWJlbHNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb250YWluZXJNb3VudHNWb2x1bWVPcHRpb25zIHtcbiAgLyoqXG4gICogTmFtZSBvZiB0aGUgZHJpdmVyIHRvIHVzZSB0byBjcmVhdGUgdGhlIHZvbHVtZS5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjZHJpdmVyX25hbWUgQ29udGFpbmVyI2RyaXZlcl9uYW1lfVxuICAqL1xuICByZWFkb25seSBkcml2ZXJOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBrZXkvdmFsdWUgbWFwIG9mIGRyaXZlciBzcGVjaWZpYyBvcHRpb25zLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNkcml2ZXJfb3B0aW9ucyBDb250YWluZXIjZHJpdmVyX29wdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IGRyaXZlck9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBQb3B1bGF0ZSB2b2x1bWUgd2l0aCBkYXRhIGZyb20gdGhlIHRhcmdldC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjbm9fY29weSBDb250YWluZXIjbm9fY29weX1cbiAgKi9cbiAgcmVhZG9ubHkgbm9Db3B5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBQYXRoIHdpdGhpbiB0aGUgdm9sdW1lIHRvIG1vdW50LiBSZXF1aXJlcyBkb2NrZXIgc2VydmVyIHZlcnNpb24gMS40NSBvciBoaWdoZXIuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3N1YnBhdGggQ29udGFpbmVyI3N1YnBhdGh9XG4gICovXG4gIHJlYWRvbmx5IHN1YnBhdGg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGxhYmVscyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNsYWJlbHMgQ29udGFpbmVyI2xhYmVsc31cbiAgKi9cbiAgcmVhZG9ubHkgbGFiZWxzPzogQ29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9uc0xhYmVsc1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZXJNb3VudHNWb2x1bWVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IENvbnRhaW5lck1vdW50c1ZvbHVtZU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZHJpdmVyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZHJpdmVyTmFtZSksXG4gICAgZHJpdmVyX29wdGlvbnM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZHJpdmVyT3B0aW9ucyksXG4gICAgbm9fY29weTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEubm9Db3B5KSxcbiAgICBzdWJwYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1YnBhdGgpLFxuICAgIGxhYmVsczogY2RrdGYubGlzdE1hcHBlcihjb250YWluZXJNb3VudHNWb2x1bWVPcHRpb25zTGFiZWxzVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEubGFiZWxzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZXJNb3VudHNWb2x1bWVPcHRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IENvbnRhaW5lck1vdW50c1ZvbHVtZU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGRyaXZlcl9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kcml2ZXJOYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkcml2ZXJfb3B0aW9uczoge1xuICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHN0cnVjdCEuZHJpdmVyT3B0aW9ucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgIH0sXG4gICAgbm9fY29weToge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5vQ29weSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIHN1YnBhdGg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN1YnBhdGgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGxhYmVsczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9uc0xhYmVsc1RvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmxhYmVscyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9uc0xhYmVsc0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZHJpdmVyTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kcml2ZXJOYW1lID0gdGhpcy5fZHJpdmVyTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RyaXZlck9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZHJpdmVyT3B0aW9ucyA9IHRoaXMuX2RyaXZlck9wdGlvbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ub0NvcHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubm9Db3B5ID0gdGhpcy5fbm9Db3B5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3VicGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdWJwYXRoID0gdGhpcy5fc3VicGF0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xhYmVscz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYWJlbHMgPSB0aGlzLl9sYWJlbHM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb250YWluZXJNb3VudHNWb2x1bWVPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZHJpdmVyTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RyaXZlck9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ub0NvcHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJwYXRoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGFiZWxzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RyaXZlck5hbWUgPSB2YWx1ZS5kcml2ZXJOYW1lO1xuICAgICAgdGhpcy5fZHJpdmVyT3B0aW9ucyA9IHZhbHVlLmRyaXZlck9wdGlvbnM7XG4gICAgICB0aGlzLl9ub0NvcHkgPSB2YWx1ZS5ub0NvcHk7XG4gICAgICB0aGlzLl9zdWJwYXRoID0gdmFsdWUuc3VicGF0aDtcbiAgICAgIHRoaXMuX2xhYmVscy5pbnRlcm5hbFZhbHVlID0gdmFsdWUubGFiZWxzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRyaXZlcl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RyaXZlck5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRyaXZlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkcml2ZXJfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZHJpdmVyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZHJpdmVyTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERyaXZlck5hbWUoKSB7XG4gICAgdGhpcy5fZHJpdmVyTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZHJpdmVyTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kcml2ZXJOYW1lO1xuICB9XG5cbiAgLy8gZHJpdmVyX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZHJpdmVyT3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IGRyaXZlck9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCdkcml2ZXJfb3B0aW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZHJpdmVyT3B0aW9ucyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX2RyaXZlck9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREcml2ZXJPcHRpb25zKCkge1xuICAgIHRoaXMuX2RyaXZlck9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRyaXZlck9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHJpdmVyT3B0aW9ucztcbiAgfVxuXG4gIC8vIG5vX2NvcHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm9Db3B5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBub0NvcHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbm9fY29weScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbm9Db3B5KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9ub0NvcHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb0NvcHkoKSB7XG4gICAgdGhpcy5fbm9Db3B5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBub0NvcHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9Db3B5O1xuICB9XG5cbiAgLy8gc3VicGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJwYXRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdWJwYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VicGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VicGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3VicGF0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1YnBhdGgoKSB7XG4gICAgdGhpcy5fc3VicGF0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VicGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJwYXRoO1xuICB9XG5cbiAgLy8gbGFiZWxzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhYmVscyA9IG5ldyBDb250YWluZXJNb3VudHNWb2x1bWVPcHRpb25zTGFiZWxzTGlzdCh0aGlzLCBcImxhYmVsc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBsYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVscztcbiAgfVxuICBwdWJsaWMgcHV0TGFiZWxzKHZhbHVlOiBDb250YWluZXJNb3VudHNWb2x1bWVPcHRpb25zTGFiZWxzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2xhYmVscy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGFiZWxzKCkge1xuICAgIHRoaXMuX2xhYmVscy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYWJlbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWxzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFpbmVyTW91bnRzIHtcbiAgLyoqXG4gICogV2hldGhlciB0aGUgbW91bnQgc2hvdWxkIGJlIHJlYWQtb25seS5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjcmVhZF9vbmx5IENvbnRhaW5lciNyZWFkX29ubHl9XG4gICovXG4gIHJlYWRvbmx5IHJlYWRPbmx5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBNb3VudCBzb3VyY2UgKGUuZy4gYSB2b2x1bWUgbmFtZSwgYSBob3N0IHBhdGgpLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNzb3VyY2UgQ29udGFpbmVyI3NvdXJjZX1cbiAgKi9cbiAgcmVhZG9ubHkgc291cmNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBDb250YWluZXIgcGF0aFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciN0YXJnZXQgQ29udGFpbmVyI3RhcmdldH1cbiAgKi9cbiAgcmVhZG9ubHkgdGFyZ2V0OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBtb3VudCB0eXBlXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3R5cGUgQ29udGFpbmVyI3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogYmluZF9vcHRpb25zIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2JpbmRfb3B0aW9ucyBDb250YWluZXIjYmluZF9vcHRpb25zfVxuICAqL1xuICByZWFkb25seSBiaW5kT3B0aW9ucz86IENvbnRhaW5lck1vdW50c0JpbmRPcHRpb25zO1xuICAvKipcbiAgKiB0bXBmc19vcHRpb25zIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3RtcGZzX29wdGlvbnMgQ29udGFpbmVyI3RtcGZzX29wdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IHRtcGZzT3B0aW9ucz86IENvbnRhaW5lck1vdW50c1RtcGZzT3B0aW9ucztcbiAgLyoqXG4gICogdm9sdW1lX29wdGlvbnMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjdm9sdW1lX29wdGlvbnMgQ29udGFpbmVyI3ZvbHVtZV9vcHRpb25zfVxuICAqL1xuICByZWFkb25seSB2b2x1bWVPcHRpb25zPzogQ29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lck1vdW50c1RvVGVycmFmb3JtKHN0cnVjdD86IENvbnRhaW5lck1vdW50cyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlYWRfb25seTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucmVhZE9ubHkpLFxuICAgIHNvdXJjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2UpLFxuICAgIHRhcmdldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXQpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgYmluZF9vcHRpb25zOiBjb250YWluZXJNb3VudHNCaW5kT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuYmluZE9wdGlvbnMpLFxuICAgIHRtcGZzX29wdGlvbnM6IGNvbnRhaW5lck1vdW50c1RtcGZzT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEudG1wZnNPcHRpb25zKSxcbiAgICB2b2x1bWVfb3B0aW9uczogY29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lT3B0aW9ucyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVyTW91bnRzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVyTW91bnRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHJlYWRfb25seToge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlYWRPbmx5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgc291cmNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zb3VyY2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHRhcmdldDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBiaW5kX29wdGlvbnM6IHtcbiAgICAgIHZhbHVlOiBjb250YWluZXJNb3VudHNCaW5kT3B0aW9uc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYmluZE9wdGlvbnMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDb250YWluZXJNb3VudHNCaW5kT3B0aW9uc0xpc3RcIixcbiAgICB9LFxuICAgIHRtcGZzX29wdGlvbnM6IHtcbiAgICAgIHZhbHVlOiBjb250YWluZXJNb3VudHNUbXBmc09wdGlvbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRtcGZzT3B0aW9ucyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvbnRhaW5lck1vdW50c1RtcGZzT3B0aW9uc0xpc3RcIixcbiAgICB9LFxuICAgIHZvbHVtZV9vcHRpb25zOiB7XG4gICAgICB2YWx1ZTogY29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9uc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lT3B0aW9ucyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvbnRhaW5lck1vdW50c1ZvbHVtZU9wdGlvbnNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRhaW5lck1vdW50c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb250YWluZXJNb3VudHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlYWRPbmx5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlYWRPbmx5ID0gdGhpcy5fcmVhZE9ubHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc291cmNlID0gdGhpcy5fc291cmNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhcmdldCA9IHRoaXMuX3RhcmdldDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3R5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9iaW5kT3B0aW9ucz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5iaW5kT3B0aW9ucyA9IHRoaXMuX2JpbmRPcHRpb25zPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdG1wZnNPcHRpb25zPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRtcGZzT3B0aW9ucyA9IHRoaXMuX3RtcGZzT3B0aW9ucz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZvbHVtZU9wdGlvbnM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudm9sdW1lT3B0aW9ucyA9IHRoaXMuX3ZvbHVtZU9wdGlvbnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb250YWluZXJNb3VudHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVhZE9ubHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zb3VyY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYmluZE9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RtcGZzT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdm9sdW1lT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlYWRPbmx5ID0gdmFsdWUucmVhZE9ubHk7XG4gICAgICB0aGlzLl9zb3VyY2UgPSB2YWx1ZS5zb3VyY2U7XG4gICAgICB0aGlzLl90YXJnZXQgPSB2YWx1ZS50YXJnZXQ7XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICAgIHRoaXMuX2JpbmRPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5iaW5kT3B0aW9ucztcbiAgICAgIHRoaXMuX3RtcGZzT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWUudG1wZnNPcHRpb25zO1xuICAgICAgdGhpcy5fdm9sdW1lT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWUudm9sdW1lT3B0aW9ucztcbiAgICB9XG4gIH1cblxuICAvLyByZWFkX29ubHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVhZE9ubHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHJlYWRPbmx5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlYWRfb25seScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVhZE9ubHkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JlYWRPbmx5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVhZE9ubHkoKSB7XG4gICAgdGhpcy5fcmVhZE9ubHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlYWRPbmx5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5O1xuICB9XG5cbiAgLy8gc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvdXJjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZSgpIHtcbiAgICB0aGlzLl9zb3VyY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2U7XG4gIH1cblxuICAvLyB0YXJnZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFyZ2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXJnZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGFyZ2V0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXQ7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8vIGJpbmRfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9iaW5kT3B0aW9ucyA9IG5ldyBDb250YWluZXJNb3VudHNCaW5kT3B0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImJpbmRfb3B0aW9uc1wiKTtcbiAgcHVibGljIGdldCBiaW5kT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fYmluZE9wdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dEJpbmRPcHRpb25zKHZhbHVlOiBDb250YWluZXJNb3VudHNCaW5kT3B0aW9ucykge1xuICAgIHRoaXMuX2JpbmRPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCaW5kT3B0aW9ucygpIHtcbiAgICB0aGlzLl9iaW5kT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiaW5kT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iaW5kT3B0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdG1wZnNfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90bXBmc09wdGlvbnMgPSBuZXcgQ29udGFpbmVyTW91bnRzVG1wZnNPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidG1wZnNfb3B0aW9uc1wiKTtcbiAgcHVibGljIGdldCB0bXBmc09wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RtcGZzT3B0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0VG1wZnNPcHRpb25zKHZhbHVlOiBDb250YWluZXJNb3VudHNUbXBmc09wdGlvbnMpIHtcbiAgICB0aGlzLl90bXBmc09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRtcGZzT3B0aW9ucygpIHtcbiAgICB0aGlzLl90bXBmc09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG1wZnNPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RtcGZzT3B0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdm9sdW1lX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdm9sdW1lT3B0aW9ucyA9IG5ldyBDb250YWluZXJNb3VudHNWb2x1bWVPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidm9sdW1lX29wdGlvbnNcIik7XG4gIHB1YmxpYyBnZXQgdm9sdW1lT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fdm9sdW1lT3B0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0Vm9sdW1lT3B0aW9ucyh2YWx1ZTogQ29udGFpbmVyTW91bnRzVm9sdW1lT3B0aW9ucykge1xuICAgIHRoaXMuX3ZvbHVtZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZvbHVtZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5fdm9sdW1lT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2b2x1bWVPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZvbHVtZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyTW91bnRzTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogQ29udGFpbmVyTW91bnRzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IENvbnRhaW5lck1vdW50c091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBDb250YWluZXJNb3VudHNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb250YWluZXJOZXR3b3Jrc0FkdmFuY2VkIHtcbiAgLyoqXG4gICogVGhlIG5ldHdvcmsgYWxpYXNlcyBvZiB0aGUgY29udGFpbmVyIGluIHRoZSBzcGVjaWZpYyBuZXR3b3JrLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNhbGlhc2VzIENvbnRhaW5lciNhbGlhc2VzfVxuICAqL1xuICByZWFkb25seSBhbGlhc2VzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIFRoZSBJUFY0IGFkZHJlc3Mgb2YgdGhlIGNvbnRhaW5lciBpbiB0aGUgc3BlY2lmaWMgbmV0d29yay5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjaXB2NF9hZGRyZXNzIENvbnRhaW5lciNpcHY0X2FkZHJlc3N9XG4gICovXG4gIHJlYWRvbmx5IGlwdjRBZGRyZXNzPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgSVBWNiBhZGRyZXNzIG9mIHRoZSBjb250YWluZXIgaW4gdGhlIHNwZWNpZmljIG5ldHdvcmsuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2lwdjZfYWRkcmVzcyBDb250YWluZXIjaXB2Nl9hZGRyZXNzfVxuICAqL1xuICByZWFkb25seSBpcHY2QWRkcmVzcz86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIG5hbWUgb3IgaWQgb2YgdGhlIG5ldHdvcmsgdG8gdXNlLiBZb3UgY2FuIHVzZSBgbmFtZWAgb3IgYGlkYCBhdHRyaWJ1dGUgZnJvbSBhIGBkb2NrZXJfbmV0d29ya2AgcmVzb3VyY2UuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI25hbWUgQ29udGFpbmVyI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lck5ldHdvcmtzQWR2YW5jZWRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb250YWluZXJOZXR3b3Jrc0FkdmFuY2VkIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuYWxpYXNlcyksXG4gICAgaXB2NF9hZGRyZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlwdjRBZGRyZXNzKSxcbiAgICBpcHY2X2FkZHJlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaXB2NkFkZHJlc3MpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVyTmV0d29ya3NBZHZhbmNlZFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IENvbnRhaW5lck5ldHdvcmtzQWR2YW5jZWQgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWxpYXNlczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmFsaWFzZXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICBpcHY0X2FkZHJlc3M6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlwdjRBZGRyZXNzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpcHY2X2FkZHJlc3M6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlwdjZBZGRyZXNzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRhaW5lck5ldHdvcmtzQWR2YW5jZWRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29udGFpbmVyTmV0d29ya3NBZHZhbmNlZCB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWxpYXNlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbGlhc2VzID0gdGhpcy5fYWxpYXNlcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lwdjRBZGRyZXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlwdjRBZGRyZXNzID0gdGhpcy5faXB2NEFkZHJlc3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pcHY2QWRkcmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pcHY2QWRkcmVzcyA9IHRoaXMuX2lwdjZBZGRyZXNzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lID0gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvbnRhaW5lck5ldHdvcmtzQWR2YW5jZWQgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWxpYXNlcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lwdjRBZGRyZXNzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faXB2NkFkZHJlc3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FsaWFzZXMgPSB2YWx1ZS5hbGlhc2VzO1xuICAgICAgdGhpcy5faXB2NEFkZHJlc3MgPSB2YWx1ZS5pcHY0QWRkcmVzcztcbiAgICAgIHRoaXMuX2lwdjZBZGRyZXNzID0gdmFsdWUuaXB2NkFkZHJlc3M7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBhbGlhc2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsaWFzZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYWxpYXNlcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWxpYXNlcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsaWFzZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYWxpYXNlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsaWFzZXMoKSB7XG4gICAgdGhpcy5fYWxpYXNlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxpYXNlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlhc2VzO1xuICB9XG5cbiAgLy8gaXB2NF9hZGRyZXNzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lwdjRBZGRyZXNzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpcHY0QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lwdjRfYWRkcmVzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXB2NEFkZHJlc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lwdjRBZGRyZXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXB2NEFkZHJlc3MoKSB7XG4gICAgdGhpcy5faXB2NEFkZHJlc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlwdjRBZGRyZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lwdjRBZGRyZXNzO1xuICB9XG5cbiAgLy8gaXB2Nl9hZGRyZXNzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lwdjZBZGRyZXNzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpcHY2QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lwdjZfYWRkcmVzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXB2NkFkZHJlc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lwdjZBZGRyZXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXB2NkFkZHJlc3MoKSB7XG4gICAgdGhpcy5faXB2NkFkZHJlc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlwdjZBZGRyZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lwdjZBZGRyZXNzO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnRhaW5lck5ldHdvcmtzQWR2YW5jZWRMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBDb250YWluZXJOZXR3b3Jrc0FkdmFuY2VkW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IENvbnRhaW5lck5ldHdvcmtzQWR2YW5jZWRPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgQ29udGFpbmVyTmV0d29ya3NBZHZhbmNlZE91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5lclBvcnRzIHtcbiAgLyoqXG4gICogUG9ydCBleHBvc2VkIG91dCBvZiB0aGUgY29udGFpbmVyLiBJZiBub3QgZ2l2ZW4gYSBmcmVlIHJhbmRvbSBwb3J0IGA+PSAzMjc2OGAgd2lsbCBiZSB1c2VkLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNleHRlcm5hbCBDb250YWluZXIjZXh0ZXJuYWx9XG4gICovXG4gIHJlYWRvbmx5IGV4dGVybmFsPzogbnVtYmVyO1xuICAvKipcbiAgKiBQb3J0IHdpdGhpbiB0aGUgY29udGFpbmVyLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNpbnRlcm5hbCBDb250YWluZXIjaW50ZXJuYWx9XG4gICovXG4gIHJlYWRvbmx5IGludGVybmFsOiBudW1iZXI7XG4gIC8qKlxuICAqIElQIGFkZHJlc3MvbWFzayB0aGF0IGNhbiBhY2Nlc3MgdGhpcyBwb3J0LiBEZWZhdWx0cyB0byBgMC4wLjAuMGAuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2lwIENvbnRhaW5lciNpcH1cbiAgKi9cbiAgcmVhZG9ubHkgaXA/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFByb3RvY29sIHRoYXQgY2FuIGJlIHVzZWQgb3ZlciB0aGlzIHBvcnQuIERlZmF1bHRzIHRvIGB0Y3BgLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNwcm90b2NvbCBDb250YWluZXIjcHJvdG9jb2x9XG4gICovXG4gIHJlYWRvbmx5IHByb3RvY29sPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVyUG9ydHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb250YWluZXJQb3J0cyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV4dGVybmFsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4dGVybmFsKSxcbiAgICBpbnRlcm5hbDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbnRlcm5hbCksXG4gICAgaXA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaXApLFxuICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZXJQb3J0c1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IENvbnRhaW5lclBvcnRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGV4dGVybmFsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5leHRlcm5hbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgaW50ZXJuYWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmludGVybmFsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBpcDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaXApLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHByb3RvY29sOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXJQb3J0c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb250YWluZXJQb3J0cyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZXh0ZXJuYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXh0ZXJuYWwgPSB0aGlzLl9leHRlcm5hbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ludGVybmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmludGVybmFsID0gdGhpcy5faW50ZXJuYWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pcCA9IHRoaXMuX2lwO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvdG9jb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvdG9jb2wgPSB0aGlzLl9wcm90b2NvbDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvbnRhaW5lclBvcnRzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2V4dGVybmFsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW50ZXJuYWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pcCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb3RvY29sID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2V4dGVybmFsID0gdmFsdWUuZXh0ZXJuYWw7XG4gICAgICB0aGlzLl9pbnRlcm5hbCA9IHZhbHVlLmludGVybmFsO1xuICAgICAgdGhpcy5faXAgPSB2YWx1ZS5pcDtcbiAgICAgIHRoaXMuX3Byb3RvY29sID0gdmFsdWUucHJvdG9jb2w7XG4gICAgfVxuICB9XG5cbiAgLy8gZXh0ZXJuYWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leHRlcm5hbD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgZXh0ZXJuYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdleHRlcm5hbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXh0ZXJuYWwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2V4dGVybmFsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXh0ZXJuYWwoKSB7XG4gICAgdGhpcy5fZXh0ZXJuYWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4dGVybmFsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVybmFsO1xuICB9XG5cbiAgLy8gaW50ZXJuYWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW50ZXJuYWw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGludGVybmFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW50ZXJuYWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGludGVybmFsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnRlcm5hbCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnRlcm5hbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcm5hbDtcbiAgfVxuXG4gIC8vIGlwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lwJyk7XG4gIH1cbiAgcHVibGljIHNldCBpcCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJcCgpIHtcbiAgICB0aGlzLl9pcCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXA7XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm90b2NvbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm90b2NvbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdG9jb2wodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb3RvY29sID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvdG9jb2woKSB7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3RvY29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RvY29sO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXJQb3J0c0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IENvbnRhaW5lclBvcnRzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IENvbnRhaW5lclBvcnRzT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IENvbnRhaW5lclBvcnRzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFpbmVyVWxpbWl0IHtcbiAgLyoqXG4gICogVGhlIGhhcmQgbGltaXRcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjaGFyZCBDb250YWluZXIjaGFyZH1cbiAgKi9cbiAgcmVhZG9ubHkgaGFyZDogbnVtYmVyO1xuICAvKipcbiAgKiBUaGUgbmFtZSBvZiB0aGUgdWxpbWl0XG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI25hbWUgQ29udGFpbmVyI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogVGhlIHNvZnQgbGltaXRcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjc29mdCBDb250YWluZXIjc29mdH1cbiAgKi9cbiAgcmVhZG9ubHkgc29mdDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVyVWxpbWl0VG9UZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVyVWxpbWl0IHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaGFyZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5oYXJkKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHNvZnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc29mdCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVyVWxpbWl0VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVyVWxpbWl0IHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGhhcmQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmhhcmQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNvZnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNvZnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyVWxpbWl0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvbnRhaW5lclVsaW1pdCB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faGFyZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5oYXJkID0gdGhpcy5faGFyZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb2Z0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvZnQgPSB0aGlzLl9zb2Z0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29udGFpbmVyVWxpbWl0IHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hhcmQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc29mdCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9oYXJkID0gdmFsdWUuaGFyZDtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZS5uYW1lO1xuICAgICAgdGhpcy5fc29mdCA9IHZhbHVlLnNvZnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gaGFyZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9oYXJkPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBoYXJkKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaGFyZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGFyZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faGFyZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoYXJkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhcmQ7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHNvZnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc29mdD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgc29mdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NvZnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvZnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NvZnQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc29mdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb2Z0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXJVbGltaXRMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBDb250YWluZXJVbGltaXRbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogQ29udGFpbmVyVWxpbWl0T3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IENvbnRhaW5lclVsaW1pdE91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5lclVwbG9hZCB7XG4gIC8qKlxuICAqIExpdGVyYWwgc3RyaW5nIHZhbHVlIHRvIHVzZSBhcyB0aGUgb2JqZWN0IGNvbnRlbnQsIHdoaWNoIHdpbGwgYmUgdXBsb2FkZWQgYXMgVVRGLTgtZW5jb2RlZCB0ZXh0LiBDb25mbGljdHMgd2l0aCBgY29udGVudF9iYXNlNjRgICYgYHNvdXJjZWBcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjY29udGVudCBDb250YWluZXIjY29udGVudH1cbiAgKi9cbiAgcmVhZG9ubHkgY29udGVudD86IHN0cmluZztcbiAgLyoqXG4gICogQmFzZTY0LWVuY29kZWQgZGF0YSB0aGF0IHdpbGwgYmUgZGVjb2RlZCBhbmQgdXBsb2FkZWQgYXMgcmF3IGJ5dGVzIGZvciB0aGUgb2JqZWN0IGNvbnRlbnQuIFRoaXMgYWxsb3dzIHNhZmVseSB1cGxvYWRpbmcgbm9uLVVURjggYmluYXJ5IGRhdGEsIGJ1dCBpcyByZWNvbW1lbmRlZCBvbmx5IGZvciBsYXJnZXIgYmluYXJ5IGNvbnRlbnQgc3VjaCBhcyB0aGUgcmVzdWx0IG9mIHRoZSBgYmFzZTY0ZW5jb2RlYCBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uLiBTZWUgW2hlcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS90ZXJyYWZvcm0tcHJvdmlkZXJzL3RlcnJhZm9ybS1wcm92aWRlci1kb2NrZXIvaXNzdWVzLzQ4I2lzc3VlY29tbWVudC0zNzQxNzQ1ODgpIGZvciB0aGUgcmVhc29uLiBDb25mbGljdHMgd2l0aCBgY29udGVudGAgJiBgc291cmNlYFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNjb250ZW50X2Jhc2U2NCBDb250YWluZXIjY29udGVudF9iYXNlNjR9XG4gICovXG4gIHJlYWRvbmx5IGNvbnRlbnRCYXNlNjQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIElmIGB0cnVlYCwgdGhlIGZpbGUgd2lsbCBiZSB1cGxvYWRlZCB3aXRoIHVzZXIgZXhlY3V0YWJsZSBwZXJtaXNzaW9uLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNleGVjdXRhYmxlIENvbnRhaW5lciNleGVjdXRhYmxlfVxuICAqL1xuICByZWFkb25seSBleGVjdXRhYmxlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBQYXRoIHRvIHRoZSBmaWxlIGluIHRoZSBjb250YWluZXIgd2hlcmUgaXMgdXBsb2FkIGdvZXMgdG9cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjZmlsZSBDb250YWluZXIjZmlsZX1cbiAgKi9cbiAgcmVhZG9ubHkgZmlsZTogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgcGVybWlzc2lvbiBtb2RlIGZvciB0aGUgZmlsZSBpbiB0aGUgY29udGFpbmVyLiBIYXMgcHJlY2VkZW5jZSBvdmVyIGBleGVjdXRhYmxlYC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjcGVybWlzc2lvbnMgQ29udGFpbmVyI3Blcm1pc3Npb25zfVxuICAqL1xuICByZWFkb25seSBwZXJtaXNzaW9ucz86IHN0cmluZztcbiAgLyoqXG4gICogQSBmaWxlbmFtZSB0aGF0IHJlZmVyZW5jZXMgYSBmaWxlIHdoaWNoIHdpbGwgYmUgdXBsb2FkZWQgYXMgdGhlIG9iamVjdCBjb250ZW50LiBUaGlzIGFsbG93cyBmb3IgbGFyZ2UgZmlsZSB1cGxvYWRzIHRoYXQgZG8gbm90IGdldCBzdG9yZWQgaW4gc3RhdGUuIENvbmZsaWN0cyB3aXRoIGBjb250ZW50YCAmIGBjb250ZW50X2Jhc2U2NGBcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjc291cmNlIENvbnRhaW5lciNzb3VyY2V9XG4gICovXG4gIHJlYWRvbmx5IHNvdXJjZT86IHN0cmluZztcbiAgLyoqXG4gICogSWYgdXNpbmcgYHNvdXJjZWAsIHRoaXMgd2lsbCBmb3JjZSBhbiB1cGRhdGUgaWYgdGhlIGZpbGUgY29udGVudCBoYXMgdXBkYXRlZCBidXQgdGhlIGZpbGVuYW1lIGhhcyBub3QuIFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciNzb3VyY2VfaGFzaCBDb250YWluZXIjc291cmNlX2hhc2h9XG4gICovXG4gIHJlYWRvbmx5IHNvdXJjZUhhc2g/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZXJVcGxvYWRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb250YWluZXJVcGxvYWQgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnQpLFxuICAgIGNvbnRlbnRfYmFzZTY0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnRCYXNlNjQpLFxuICAgIGV4ZWN1dGFibGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmV4ZWN1dGFibGUpLFxuICAgIGZpbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmlsZSksXG4gICAgcGVybWlzc2lvbnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGVybWlzc2lvbnMpLFxuICAgIHNvdXJjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2UpLFxuICAgIHNvdXJjZV9oYXNoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZUhhc2gpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lclVwbG9hZFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IENvbnRhaW5lclVwbG9hZCB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjb250ZW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb250ZW50KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb250ZW50X2Jhc2U2NDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29udGVudEJhc2U2NCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZXhlY3V0YWJsZToge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmV4ZWN1dGFibGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBmaWxlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5maWxlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwZXJtaXNzaW9uczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucGVybWlzc2lvbnMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNvdXJjZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc291cmNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzb3VyY2VfaGFzaDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc291cmNlSGFzaCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXJVcGxvYWRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29udGFpbmVyVXBsb2FkIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbnRlbnQgPSB0aGlzLl9jb250ZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGVudEJhc2U2NCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb250ZW50QmFzZTY0ID0gdGhpcy5fY29udGVudEJhc2U2NDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4ZWN1dGFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXhlY3V0YWJsZSA9IHRoaXMuX2V4ZWN1dGFibGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9maWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbGUgPSB0aGlzLl9maWxlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGVybWlzc2lvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGVybWlzc2lvbnMgPSB0aGlzLl9wZXJtaXNzaW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zb3VyY2UgPSB0aGlzLl9zb3VyY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3VyY2VIYXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvdXJjZUhhc2ggPSB0aGlzLl9zb3VyY2VIYXNoO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29udGFpbmVyVXBsb2FkIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbnRlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb250ZW50QmFzZTY0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZXhlY3V0YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NvdXJjZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NvdXJjZUhhc2ggPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29udGVudCA9IHZhbHVlLmNvbnRlbnQ7XG4gICAgICB0aGlzLl9jb250ZW50QmFzZTY0ID0gdmFsdWUuY29udGVudEJhc2U2NDtcbiAgICAgIHRoaXMuX2V4ZWN1dGFibGUgPSB2YWx1ZS5leGVjdXRhYmxlO1xuICAgICAgdGhpcy5fZmlsZSA9IHZhbHVlLmZpbGU7XG4gICAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHZhbHVlLnBlcm1pc3Npb25zO1xuICAgICAgdGhpcy5fc291cmNlID0gdmFsdWUuc291cmNlO1xuICAgICAgdGhpcy5fc291cmNlSGFzaCA9IHZhbHVlLnNvdXJjZUhhc2g7XG4gICAgfVxuICB9XG5cbiAgLy8gY29udGVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb250ZW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29udGVudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRlbnQoKSB7XG4gICAgdGhpcy5fY29udGVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG5cbiAgLy8gY29udGVudF9iYXNlNjQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGVudEJhc2U2ND86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29udGVudEJhc2U2NCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRlbnRfYmFzZTY0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb250ZW50QmFzZTY0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb250ZW50QmFzZTY0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29udGVudEJhc2U2NCgpIHtcbiAgICB0aGlzLl9jb250ZW50QmFzZTY0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250ZW50QmFzZTY0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRCYXNlNjQ7XG4gIH1cblxuICAvLyBleGVjdXRhYmxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4ZWN1dGFibGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGV4ZWN1dGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZXhlY3V0YWJsZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhlY3V0YWJsZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZXhlY3V0YWJsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4ZWN1dGFibGUoKSB7XG4gICAgdGhpcy5fZXhlY3V0YWJsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhlY3V0YWJsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRhYmxlO1xuICB9XG5cbiAgLy8gZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9maWxlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmaWxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmlsZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmlsZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGU7XG4gIH1cblxuICAvLyBwZXJtaXNzaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wZXJtaXNzaW9ucz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwZXJtaXNzaW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGVybWlzc2lvbnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Blcm1pc3Npb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGVybWlzc2lvbnMoKSB7XG4gICAgdGhpcy5fcGVybWlzc2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zO1xuICB9XG5cbiAgLy8gc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvdXJjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZSgpIHtcbiAgICB0aGlzLl9zb3VyY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2U7XG4gIH1cblxuICAvLyBzb3VyY2VfaGFzaCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zb3VyY2VIYXNoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzb3VyY2VIYXNoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2hhc2gnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUhhc2godmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvdXJjZUhhc2ggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3VyY2VIYXNoKCkge1xuICAgIHRoaXMuX3NvdXJjZUhhc2ggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZUhhc2hJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlSGFzaDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyVXBsb2FkTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogQ29udGFpbmVyVXBsb2FkW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IENvbnRhaW5lclVwbG9hZE91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBDb250YWluZXJVcGxvYWRPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb250YWluZXJWb2x1bWVzIHtcbiAgLyoqXG4gICogVGhlIHBhdGggaW4gdGhlIGNvbnRhaW5lciB3aGVyZSB0aGUgdm9sdW1lIHdpbGwgYmUgbW91bnRlZC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjY29udGFpbmVyX3BhdGggQ29udGFpbmVyI2NvbnRhaW5lcl9wYXRofVxuICAqL1xuICByZWFkb25seSBjb250YWluZXJQYXRoPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgY29udGFpbmVyIHdoZXJlIHRoZSB2b2x1bWUgaXMgY29taW5nIGZyb20uXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI2Zyb21fY29udGFpbmVyIENvbnRhaW5lciNmcm9tX2NvbnRhaW5lcn1cbiAgKi9cbiAgcmVhZG9ubHkgZnJvbUNvbnRhaW5lcj86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIHBhdGggb24gdGhlIGhvc3Qgd2hlcmUgdGhlIHZvbHVtZSBpcyBjb21pbmcgZnJvbS5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjaG9zdF9wYXRoIENvbnRhaW5lciNob3N0X3BhdGh9XG4gICovXG4gIHJlYWRvbmx5IGhvc3RQYXRoPzogc3RyaW5nO1xuICAvKipcbiAgKiBJZiBgdHJ1ZWAsIHRoaXMgdm9sdW1lIHdpbGwgYmUgcmVhZG9ubHkuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3JlYWRfb25seSBDb250YWluZXIjcmVhZF9vbmx5fVxuICAqL1xuICByZWFkb25seSByZWFkT25seT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogVGhlIG5hbWUgb2YgdGhlIGRvY2tlciB2b2x1bWUgd2hpY2ggc2hvdWxkIGJlIG1vdW50ZWQuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvY29udGFpbmVyI3ZvbHVtZV9uYW1lIENvbnRhaW5lciN2b2x1bWVfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgdm9sdW1lTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lclZvbHVtZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb250YWluZXJWb2x1bWVzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyX3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGFpbmVyUGF0aCksXG4gICAgZnJvbV9jb250YWluZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZnJvbUNvbnRhaW5lciksXG4gICAgaG9zdF9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3RQYXRoKSxcbiAgICByZWFkX29ubHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlYWRPbmx5KSxcbiAgICB2b2x1bWVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVOYW1lKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZXJWb2x1bWVzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29udGFpbmVyVm9sdW1lcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjb250YWluZXJfcGF0aDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29udGFpbmVyUGF0aCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZnJvbV9jb250YWluZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZyb21Db250YWluZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGhvc3RfcGF0aDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaG9zdFBhdGgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJlYWRfb25seToge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlYWRPbmx5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgdm9sdW1lX25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZU5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyVm9sdW1lc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb250YWluZXJWb2x1bWVzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb250YWluZXJQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbnRhaW5lclBhdGggPSB0aGlzLl9jb250YWluZXJQYXRoO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZnJvbUNvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5mcm9tQ29udGFpbmVyID0gdGhpcy5fZnJvbUNvbnRhaW5lcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvc3RQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmhvc3RQYXRoID0gdGhpcy5faG9zdFBhdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWFkT25seSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWFkT25seSA9IHRoaXMuX3JlYWRPbmx5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdm9sdW1lTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52b2x1bWVOYW1lID0gdGhpcy5fdm9sdW1lTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvbnRhaW5lclZvbHVtZXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29udGFpbmVyUGF0aCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Zyb21Db250YWluZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ob3N0UGF0aCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlYWRPbmx5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdm9sdW1lTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb250YWluZXJQYXRoID0gdmFsdWUuY29udGFpbmVyUGF0aDtcbiAgICAgIHRoaXMuX2Zyb21Db250YWluZXIgPSB2YWx1ZS5mcm9tQ29udGFpbmVyO1xuICAgICAgdGhpcy5faG9zdFBhdGggPSB2YWx1ZS5ob3N0UGF0aDtcbiAgICAgIHRoaXMuX3JlYWRPbmx5ID0gdmFsdWUucmVhZE9ubHk7XG4gICAgICB0aGlzLl92b2x1bWVOYW1lID0gdmFsdWUudm9sdW1lTmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBjb250YWluZXJfcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb250YWluZXJQYXRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250YWluZXJQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29udGFpbmVyX3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRhaW5lclBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRhaW5lclBhdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb250YWluZXJQYXRoKCkge1xuICAgIHRoaXMuX2NvbnRhaW5lclBhdGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lclBhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyUGF0aDtcbiAgfVxuXG4gIC8vIGZyb21fY29udGFpbmVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Zyb21Db250YWluZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZyb21Db250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmcm9tX2NvbnRhaW5lcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnJvbUNvbnRhaW5lcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZnJvbUNvbnRhaW5lciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZyb21Db250YWluZXIoKSB7XG4gICAgdGhpcy5fZnJvbUNvbnRhaW5lciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZnJvbUNvbnRhaW5lcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9tQ29udGFpbmVyO1xuICB9XG5cbiAgLy8gaG9zdF9wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hvc3RQYXRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob3N0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaG9zdFBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3RQYXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SG9zdFBhdGgoKSB7XG4gICAgdGhpcy5faG9zdFBhdGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhvc3RQYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3RQYXRoO1xuICB9XG5cbiAgLy8gcmVhZF9vbmx5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlYWRPbmx5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZWFkT25seSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZWFkX29ubHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlYWRPbmx5KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9yZWFkT25seSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlYWRPbmx5KCkge1xuICAgIHRoaXMuX3JlYWRPbmx5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWFkT25seUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWFkT25seTtcbiAgfVxuXG4gIC8vIHZvbHVtZV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZvbHVtZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZvbHVtZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2b2x1bWVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdm9sdW1lTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdm9sdW1lTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZvbHVtZU5hbWUoKSB7XG4gICAgdGhpcy5fdm9sdW1lTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdm9sdW1lTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92b2x1bWVOYW1lO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXJWb2x1bWVzTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogQ29udGFpbmVyVm9sdW1lc1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBDb250YWluZXJWb2x1bWVzT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IENvbnRhaW5lclZvbHVtZXNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciBkb2NrZXJfY29udGFpbmVyfVxuKi9cbmV4cG9ydCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiZG9ja2VyX2NvbnRhaW5lclwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBDb250YWluZXIgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgQ29udGFpbmVyIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBDb250YWluZXIgdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9jb250YWluZXIjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIENvbnRhaW5lciB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJkb2NrZXJfY29udGFpbmVyXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2NvbnRhaW5lciBkb2NrZXJfY29udGFpbmVyfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBDb250YWluZXJDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ29udGFpbmVyQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdkb2NrZXJfY29udGFpbmVyJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2RvY2tlcicsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNi4yJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9hdHRhY2ggPSBjb25maWcuYXR0YWNoO1xuICAgIHRoaXMuX2Nncm91cFBhcmVudCA9IGNvbmZpZy5jZ3JvdXBQYXJlbnQ7XG4gICAgdGhpcy5fY2dyb3VwbnNNb2RlID0gY29uZmlnLmNncm91cG5zTW9kZTtcbiAgICB0aGlzLl9jb21tYW5kID0gY29uZmlnLmNvbW1hbmQ7XG4gICAgdGhpcy5fY29udGFpbmVyUmVhZFJlZnJlc2hUaW1lb3V0TWlsbGlzZWNvbmRzID0gY29uZmlnLmNvbnRhaW5lclJlYWRSZWZyZXNoVGltZW91dE1pbGxpc2Vjb25kcztcbiAgICB0aGlzLl9jcHVQZXJpb2QgPSBjb25maWcuY3B1UGVyaW9kO1xuICAgIHRoaXMuX2NwdVF1b3RhID0gY29uZmlnLmNwdVF1b3RhO1xuICAgIHRoaXMuX2NwdVNldCA9IGNvbmZpZy5jcHVTZXQ7XG4gICAgdGhpcy5fY3B1U2hhcmVzID0gY29uZmlnLmNwdVNoYXJlcztcbiAgICB0aGlzLl9jcHVzID0gY29uZmlnLmNwdXM7XG4gICAgdGhpcy5fZGVzdHJveUdyYWNlU2Vjb25kcyA9IGNvbmZpZy5kZXN0cm95R3JhY2VTZWNvbmRzO1xuICAgIHRoaXMuX2RucyA9IGNvbmZpZy5kbnM7XG4gICAgdGhpcy5fZG5zT3B0cyA9IGNvbmZpZy5kbnNPcHRzO1xuICAgIHRoaXMuX2Ruc1NlYXJjaCA9IGNvbmZpZy5kbnNTZWFyY2g7XG4gICAgdGhpcy5fZG9tYWlubmFtZSA9IGNvbmZpZy5kb21haW5uYW1lO1xuICAgIHRoaXMuX2VudHJ5cG9pbnQgPSBjb25maWcuZW50cnlwb2ludDtcbiAgICB0aGlzLl9lbnYgPSBjb25maWcuZW52O1xuICAgIHRoaXMuX2dwdXMgPSBjb25maWcuZ3B1cztcbiAgICB0aGlzLl9ncm91cEFkZCA9IGNvbmZpZy5ncm91cEFkZDtcbiAgICB0aGlzLl9ob3N0bmFtZSA9IGNvbmZpZy5ob3N0bmFtZTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9pbWFnZSA9IGNvbmZpZy5pbWFnZTtcbiAgICB0aGlzLl9pbml0ID0gY29uZmlnLmluaXQ7XG4gICAgdGhpcy5faXBjTW9kZSA9IGNvbmZpZy5pcGNNb2RlO1xuICAgIHRoaXMuX2xvZ0RyaXZlciA9IGNvbmZpZy5sb2dEcml2ZXI7XG4gICAgdGhpcy5fbG9nT3B0cyA9IGNvbmZpZy5sb2dPcHRzO1xuICAgIHRoaXMuX2xvZ3MgPSBjb25maWcubG9ncztcbiAgICB0aGlzLl9tYXhSZXRyeUNvdW50ID0gY29uZmlnLm1heFJldHJ5Q291bnQ7XG4gICAgdGhpcy5fbWVtb3J5ID0gY29uZmlnLm1lbW9yeTtcbiAgICB0aGlzLl9tZW1vcnlTd2FwID0gY29uZmlnLm1lbW9yeVN3YXA7XG4gICAgdGhpcy5fbXVzdFJ1biA9IGNvbmZpZy5tdXN0UnVuO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9uZXR3b3JrTW9kZSA9IGNvbmZpZy5uZXR3b3JrTW9kZTtcbiAgICB0aGlzLl9waWRNb2RlID0gY29uZmlnLnBpZE1vZGU7XG4gICAgdGhpcy5fcHJpdmlsZWdlZCA9IGNvbmZpZy5wcml2aWxlZ2VkO1xuICAgIHRoaXMuX3B1Ymxpc2hBbGxQb3J0cyA9IGNvbmZpZy5wdWJsaXNoQWxsUG9ydHM7XG4gICAgdGhpcy5fcmVhZE9ubHkgPSBjb25maWcucmVhZE9ubHk7XG4gICAgdGhpcy5fcmVtb3ZlVm9sdW1lcyA9IGNvbmZpZy5yZW1vdmVWb2x1bWVzO1xuICAgIHRoaXMuX3Jlc3RhcnQgPSBjb25maWcucmVzdGFydDtcbiAgICB0aGlzLl9ybSA9IGNvbmZpZy5ybTtcbiAgICB0aGlzLl9ydW50aW1lID0gY29uZmlnLnJ1bnRpbWU7XG4gICAgdGhpcy5fc2VjdXJpdHlPcHRzID0gY29uZmlnLnNlY3VyaXR5T3B0cztcbiAgICB0aGlzLl9zaG1TaXplID0gY29uZmlnLnNobVNpemU7XG4gICAgdGhpcy5fc3RhcnQgPSBjb25maWcuc3RhcnQ7XG4gICAgdGhpcy5fc3RkaW5PcGVuID0gY29uZmlnLnN0ZGluT3BlbjtcbiAgICB0aGlzLl9zdG9wU2lnbmFsID0gY29uZmlnLnN0b3BTaWduYWw7XG4gICAgdGhpcy5fc3RvcFRpbWVvdXQgPSBjb25maWcuc3RvcFRpbWVvdXQ7XG4gICAgdGhpcy5fc3RvcmFnZU9wdHMgPSBjb25maWcuc3RvcmFnZU9wdHM7XG4gICAgdGhpcy5fc3lzY3RscyA9IGNvbmZpZy5zeXNjdGxzO1xuICAgIHRoaXMuX3RtcGZzID0gY29uZmlnLnRtcGZzO1xuICAgIHRoaXMuX3R0eSA9IGNvbmZpZy50dHk7XG4gICAgdGhpcy5fdXNlciA9IGNvbmZpZy51c2VyO1xuICAgIHRoaXMuX3VzZXJuc01vZGUgPSBjb25maWcudXNlcm5zTW9kZTtcbiAgICB0aGlzLl93YWl0ID0gY29uZmlnLndhaXQ7XG4gICAgdGhpcy5fd2FpdFRpbWVvdXQgPSBjb25maWcud2FpdFRpbWVvdXQ7XG4gICAgdGhpcy5fd29ya2luZ0RpciA9IGNvbmZpZy53b3JraW5nRGlyO1xuICAgIHRoaXMuX2NhcGFiaWxpdGllcy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNhcGFiaWxpdGllcztcbiAgICB0aGlzLl9kZXZpY2VzLmludGVybmFsVmFsdWUgPSBjb25maWcuZGV2aWNlcztcbiAgICB0aGlzLl9oZWFsdGhjaGVjay5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmhlYWx0aGNoZWNrO1xuICAgIHRoaXMuX2hvc3QuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5ob3N0O1xuICAgIHRoaXMuX2xhYmVscy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmxhYmVscztcbiAgICB0aGlzLl9tb3VudHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5tb3VudHM7XG4gICAgdGhpcy5fbmV0d29ya3NBZHZhbmNlZC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLm5ldHdvcmtzQWR2YW5jZWQ7XG4gICAgdGhpcy5fcG9ydHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5wb3J0cztcbiAgICB0aGlzLl91bGltaXQuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy51bGltaXQ7XG4gICAgdGhpcy5fdXBsb2FkLmludGVybmFsVmFsdWUgPSBjb25maWcudXBsb2FkO1xuICAgIHRoaXMuX3ZvbHVtZXMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy52b2x1bWVzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhdHRhY2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXR0YWNoPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhdHRhY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXR0YWNoJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdHRhY2godmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2F0dGFjaCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF0dGFjaCgpIHtcbiAgICB0aGlzLl9hdHRhY2ggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF0dGFjaElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRhY2g7XG4gIH1cblxuICAvLyBicmlkZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBicmlkZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdicmlkZ2UnKTtcbiAgfVxuXG4gIC8vIGNncm91cF9wYXJlbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2dyb3VwUGFyZW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjZ3JvdXBQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZ3JvdXBfcGFyZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjZ3JvdXBQYXJlbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Nncm91cFBhcmVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENncm91cFBhcmVudCgpIHtcbiAgICB0aGlzLl9jZ3JvdXBQYXJlbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNncm91cFBhcmVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZ3JvdXBQYXJlbnQ7XG4gIH1cblxuICAvLyBjZ3JvdXBuc19tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nncm91cG5zTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2dyb3VwbnNNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2dyb3VwbnNfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2dyb3VwbnNNb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jZ3JvdXBuc01vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDZ3JvdXBuc01vZGUoKSB7XG4gICAgdGhpcy5fY2dyb3VwbnNNb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZ3JvdXBuc01vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2dyb3VwbnNNb2RlO1xuICB9XG5cbiAgLy8gY29tbWFuZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbW1hbmQ/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY29tbWFuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjb21tYW5kJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21tYW5kKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2NvbW1hbmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21tYW5kKCkge1xuICAgIHRoaXMuX2NvbW1hbmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbW1hbmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tbWFuZDtcbiAgfVxuXG4gIC8vIGNvbnRhaW5lcl9sb2dzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29udGFpbmVyTG9ncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRhaW5lcl9sb2dzJyk7XG4gIH1cblxuICAvLyBjb250YWluZXJfcmVhZF9yZWZyZXNoX3RpbWVvdXRfbWlsbGlzZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRhaW5lclJlYWRSZWZyZXNoVGltZW91dE1pbGxpc2Vjb25kcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgY29udGFpbmVyUmVhZFJlZnJlc2hUaW1lb3V0TWlsbGlzZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnY29udGFpbmVyX3JlYWRfcmVmcmVzaF90aW1lb3V0X21pbGxpc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGFpbmVyUmVhZFJlZnJlc2hUaW1lb3V0TWlsbGlzZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jb250YWluZXJSZWFkUmVmcmVzaFRpbWVvdXRNaWxsaXNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb250YWluZXJSZWFkUmVmcmVzaFRpbWVvdXRNaWxsaXNlY29uZHMoKSB7XG4gICAgdGhpcy5fY29udGFpbmVyUmVhZFJlZnJlc2hUaW1lb3V0TWlsbGlzZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250YWluZXJSZWFkUmVmcmVzaFRpbWVvdXRNaWxsaXNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyUmVhZFJlZnJlc2hUaW1lb3V0TWlsbGlzZWNvbmRzO1xuICB9XG5cbiAgLy8gY3B1X3BlcmlvZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcHVQZXJpb2Q/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGNwdVBlcmlvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2NwdV9wZXJpb2QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNwdVBlcmlvZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY3B1UGVyaW9kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3B1UGVyaW9kKCkge1xuICAgIHRoaXMuX2NwdVBlcmlvZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3B1UGVyaW9kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NwdVBlcmlvZDtcbiAgfVxuXG4gIC8vIGNwdV9xdW90YSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcHVRdW90YT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgY3B1UXVvdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjcHVfcXVvdGEnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNwdVF1b3RhKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jcHVRdW90YSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENwdVF1b3RhKCkge1xuICAgIHRoaXMuX2NwdVF1b3RhID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcHVRdW90YUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcHVRdW90YTtcbiAgfVxuXG4gIC8vIGNwdV9zZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3B1U2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcHVTZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcHVfc2V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjcHVTZXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NwdVNldCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENwdVNldCgpIHtcbiAgICB0aGlzLl9jcHVTZXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNwdVNldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcHVTZXQ7XG4gIH1cblxuICAvLyBjcHVfc2hhcmVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NwdVNoYXJlcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgY3B1U2hhcmVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnY3B1X3NoYXJlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3B1U2hhcmVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jcHVTaGFyZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcHVTaGFyZXMoKSB7XG4gICAgdGhpcy5fY3B1U2hhcmVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcHVTaGFyZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3B1U2hhcmVzO1xuICB9XG5cbiAgLy8gY3B1cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcHVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3B1cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3B1cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3B1cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENwdXMoKSB7XG4gICAgdGhpcy5fY3B1cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3B1c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcHVzO1xuICB9XG5cbiAgLy8gZGVzdHJveV9ncmFjZV9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc3Ryb3lHcmFjZVNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGRlc3Ryb3lHcmFjZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkZXN0cm95X2dyYWNlX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc3Ryb3lHcmFjZVNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Rlc3Ryb3lHcmFjZVNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXN0cm95R3JhY2VTZWNvbmRzKCkge1xuICAgIHRoaXMuX2Rlc3Ryb3lHcmFjZVNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3Ryb3lHcmFjZVNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdHJveUdyYWNlU2Vjb25kcztcbiAgfVxuXG4gIC8vIGRucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZG5zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdkbnMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBkbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZG5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RG5zKCkge1xuICAgIHRoaXMuX2RucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RucztcbiAgfVxuXG4gIC8vIGRuc19vcHRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Ruc09wdHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZG5zT3B0cygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZG5zX29wdHMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBkbnNPcHRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2Ruc09wdHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREbnNPcHRzKCkge1xuICAgIHRoaXMuX2Ruc09wdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRuc09wdHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG5zT3B0cztcbiAgfVxuXG4gIC8vIGRuc19zZWFyY2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZG5zU2VhcmNoPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGRuc1NlYXJjaCgpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZG5zX3NlYXJjaCcpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRuc1NlYXJjaCh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9kbnNTZWFyY2ggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREbnNTZWFyY2goKSB7XG4gICAgdGhpcy5fZG5zU2VhcmNoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkbnNTZWFyY2hJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG5zU2VhcmNoO1xuICB9XG5cbiAgLy8gZG9tYWlubmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kb21haW5uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkb21haW5uYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWlubmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9tYWlubmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG9tYWlubmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERvbWFpbm5hbWUoKSB7XG4gICAgdGhpcy5fZG9tYWlubmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9tYWlubmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5uYW1lO1xuICB9XG5cbiAgLy8gZW50cnlwb2ludCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VudHJ5cG9pbnQ/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZW50cnlwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdlbnRyeXBvaW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBlbnRyeXBvaW50KHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2VudHJ5cG9pbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbnRyeXBvaW50KCkge1xuICAgIHRoaXMuX2VudHJ5cG9pbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVudHJ5cG9pbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW50cnlwb2ludDtcbiAgfVxuXG4gIC8vIGVudiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Vudj86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBlbnYoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2VudicpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVudih2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9lbnYgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbnYoKSB7XG4gICAgdGhpcy5fZW52ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbnZJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW52O1xuICB9XG5cbiAgLy8gZXhpdF9jb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXhpdENvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdleGl0X2NvZGUnKTtcbiAgfVxuXG4gIC8vIGdwdXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ3B1cz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZ3B1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dwdXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdwdXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2dwdXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHcHVzKCkge1xuICAgIHRoaXMuX2dwdXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdwdXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3B1cztcbiAgfVxuXG4gIC8vIGdyb3VwX2FkZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ncm91cEFkZD86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBncm91cEFkZCgpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZ3JvdXBfYWRkJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ3JvdXBBZGQodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZ3JvdXBBZGQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHcm91cEFkZCgpIHtcbiAgICB0aGlzLl9ncm91cEFkZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ3JvdXBBZGRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JvdXBBZGQ7XG4gIH1cblxuICAvLyBob3N0bmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hvc3RuYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob3N0bmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RuYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBob3N0bmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9zdG5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIb3N0bmFtZSgpIHtcbiAgICB0aGlzLl9ob3N0bmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdG5hbWU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBpbWFnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pbWFnZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW1hZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbWFnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW1hZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ltYWdlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGltYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlO1xuICB9XG5cbiAgLy8gaW5pdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luaXQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5pdCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5pdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluaXQoKSB7XG4gICAgdGhpcy5faW5pdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbml0O1xuICB9XG5cbiAgLy8gaXBjX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pcGNNb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpcGNNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXBjX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlwY01vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lwY01vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJcGNNb2RlKCkge1xuICAgIHRoaXMuX2lwY01vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlwY01vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXBjTW9kZTtcbiAgfVxuXG4gIC8vIGxvZ19kcml2ZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dEcml2ZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvZ0RyaXZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19kcml2ZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ0RyaXZlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9nRHJpdmVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nRHJpdmVyKCkge1xuICAgIHRoaXMuX2xvZ0RyaXZlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nRHJpdmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0RyaXZlcjtcbiAgfVxuXG4gIC8vIGxvZ19vcHRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ09wdHM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCBsb2dPcHRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgnbG9nX29wdHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ09wdHModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl9sb2dPcHRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nT3B0cygpIHtcbiAgICB0aGlzLl9sb2dPcHRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dPcHRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ09wdHM7XG4gIH1cblxuICAvLyBsb2dzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ3M/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGxvZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbG9ncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9ncyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fbG9ncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ3MoKSB7XG4gICAgdGhpcy5fbG9ncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dzO1xuICB9XG5cbiAgLy8gbWF4X3JldHJ5X2NvdW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heFJldHJ5Q291bnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heFJldHJ5Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfcmV0cnlfY291bnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heFJldHJ5Q291bnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heFJldHJ5Q291bnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhSZXRyeUNvdW50KCkge1xuICAgIHRoaXMuX21heFJldHJ5Q291bnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heFJldHJ5Q291bnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4UmV0cnlDb3VudDtcbiAgfVxuXG4gIC8vIG1lbW9yeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZW1vcnk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1lbW9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21lbW9yeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVtb3J5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tZW1vcnkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZW1vcnkoKSB7XG4gICAgdGhpcy5fbWVtb3J5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZW1vcnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVtb3J5O1xuICB9XG5cbiAgLy8gbWVtb3J5X3N3YXAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWVtb3J5U3dhcD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWVtb3J5U3dhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21lbW9yeV9zd2FwJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZW1vcnlTd2FwKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tZW1vcnlTd2FwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWVtb3J5U3dhcCgpIHtcbiAgICB0aGlzLl9tZW1vcnlTd2FwID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZW1vcnlTd2FwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lbW9yeVN3YXA7XG4gIH1cblxuICAvLyBtdXN0X3J1biAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tdXN0UnVuPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBtdXN0UnVuKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ211c3RfcnVuJyk7XG4gIH1cbiAgcHVibGljIHNldCBtdXN0UnVuKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9tdXN0UnVuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TXVzdFJ1bigpIHtcbiAgICB0aGlzLl9tdXN0UnVuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtdXN0UnVuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211c3RSdW47XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfZGF0YSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uZXR3b3JrRGF0YSA9IG5ldyBDb250YWluZXJOZXR3b3JrRGF0YUxpc3QodGhpcywgXCJuZXR3b3JrX2RhdGFcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IG5ldHdvcmtEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9uZXR3b3JrRGF0YTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uZXR3b3JrTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmV0d29ya01vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXR3b3JrX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5ldHdvcmtNb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uZXR3b3JrTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5ldHdvcmtNb2RlKCkge1xuICAgIHRoaXMuX25ldHdvcmtNb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuZXR3b3JrTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uZXR3b3JrTW9kZTtcbiAgfVxuXG4gIC8vIHBpZF9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BpZE1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBpZE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwaWRfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGlkTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGlkTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBpZE1vZGUoKSB7XG4gICAgdGhpcy5fcGlkTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGlkTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9waWRNb2RlO1xuICB9XG5cbiAgLy8gcHJpdmlsZWdlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcml2aWxlZ2VkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBwcml2aWxlZ2VkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3ByaXZpbGVnZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByaXZpbGVnZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3ByaXZpbGVnZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcml2aWxlZ2VkKCkge1xuICAgIHRoaXMuX3ByaXZpbGVnZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaXZpbGVnZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpdmlsZWdlZDtcbiAgfVxuXG4gIC8vIHB1Ymxpc2hfYWxsX3BvcnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3B1Ymxpc2hBbGxQb3J0cz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcHVibGlzaEFsbFBvcnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3B1Ymxpc2hfYWxsX3BvcnRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBwdWJsaXNoQWxsUG9ydHModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3B1Ymxpc2hBbGxQb3J0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFB1Ymxpc2hBbGxQb3J0cygpIHtcbiAgICB0aGlzLl9wdWJsaXNoQWxsUG9ydHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHB1Ymxpc2hBbGxQb3J0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wdWJsaXNoQWxsUG9ydHM7XG4gIH1cblxuICAvLyByZWFkX29ubHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVhZE9ubHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHJlYWRPbmx5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlYWRfb25seScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVhZE9ubHkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JlYWRPbmx5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVhZE9ubHkoKSB7XG4gICAgdGhpcy5fcmVhZE9ubHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlYWRPbmx5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5O1xuICB9XG5cbiAgLy8gcmVtb3ZlX3ZvbHVtZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVtb3ZlVm9sdW1lcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVtb3ZlVm9sdW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZW1vdmVfdm9sdW1lcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVtb3ZlVm9sdW1lcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVtb3ZlVm9sdW1lcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlbW92ZVZvbHVtZXMoKSB7XG4gICAgdGhpcy5fcmVtb3ZlVm9sdW1lcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVtb3ZlVm9sdW1lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1vdmVWb2x1bWVzO1xuICB9XG5cbiAgLy8gcmVzdGFydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXN0YXJ0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzdGFydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzdGFydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzdGFydCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3RhcnQoKSB7XG4gICAgdGhpcy5fcmVzdGFydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzdGFydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN0YXJ0O1xuICB9XG5cbiAgLy8gcm0gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm0/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHJtKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JtJyk7XG4gIH1cbiAgcHVibGljIHNldCBybSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcm0gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSbSgpIHtcbiAgICB0aGlzLl9ybSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm1JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm07XG4gIH1cblxuICAvLyBydW50aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcnVudGltZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcnVudGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3J1bnRpbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJ1bnRpbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3J1bnRpbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSdW50aW1lKCkge1xuICAgIHRoaXMuX3J1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bnRpbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVudGltZTtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X29wdHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWN1cml0eU9wdHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlPcHRzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9vcHRzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlPcHRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NlY3VyaXR5T3B0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3VyaXR5T3B0cygpIHtcbiAgICB0aGlzLl9zZWN1cml0eU9wdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5T3B0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN1cml0eU9wdHM7XG4gIH1cblxuICAvLyBzaG1fc2l6ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NobVNpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHNobVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzaG1fc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2htU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2htU2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNobVNpemUoKSB7XG4gICAgdGhpcy5fc2htU2l6ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2htU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaG1TaXplO1xuICB9XG5cbiAgLy8gc3RhcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhcnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N0YXJ0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGFydCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc3RhcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGFydCgpIHtcbiAgICB0aGlzLl9zdGFydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnQ7XG4gIH1cblxuICAvLyBzdGRpbl9vcGVuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0ZGluT3Blbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc3RkaW5PcGVuKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N0ZGluX29wZW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0ZGluT3Blbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc3RkaW5PcGVuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RkaW5PcGVuKCkge1xuICAgIHRoaXMuX3N0ZGluT3BlbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RkaW5PcGVuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZGluT3BlbjtcbiAgfVxuXG4gIC8vIHN0b3Bfc2lnbmFsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RvcFNpZ25hbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RvcFNpZ25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0b3Bfc2lnbmFsJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdG9wU2lnbmFsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdG9wU2lnbmFsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcFNpZ25hbCgpIHtcbiAgICB0aGlzLl9zdG9wU2lnbmFsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdG9wU2lnbmFsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3BTaWduYWw7XG4gIH1cblxuICAvLyBzdG9wX3RpbWVvdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9wVGltZW91dD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgc3RvcFRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzdG9wX3RpbWVvdXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0b3BUaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdG9wVGltZW91dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0b3BUaW1lb3V0KCkge1xuICAgIHRoaXMuX3N0b3BUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdG9wVGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9wVGltZW91dDtcbiAgfVxuXG4gIC8vIHN0b3JhZ2Vfb3B0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yYWdlT3B0cz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VPcHRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgnc3RvcmFnZV9vcHRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdG9yYWdlT3B0cyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3N0b3JhZ2VPcHRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmFnZU9wdHMoKSB7XG4gICAgdGhpcy5fc3RvcmFnZU9wdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VPcHRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VPcHRzO1xuICB9XG5cbiAgLy8gc3lzY3RscyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zeXNjdGxzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgc3lzY3RscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3N5c2N0bHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN5c2N0bHModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl9zeXNjdGxzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3lzY3RscygpIHtcbiAgICB0aGlzLl9zeXNjdGxzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzeXNjdGxzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N5c2N0bHM7XG4gIH1cblxuICAvLyB0bXBmcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90bXBmcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRtcGZzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndG1wZnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRtcGZzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdG1wZnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUbXBmcygpIHtcbiAgICB0aGlzLl90bXBmcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG1wZnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG1wZnM7XG4gIH1cblxuICAvLyB0dHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHR5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0dHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndHR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0dHkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3R0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR0eSgpIHtcbiAgICB0aGlzLl90dHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dHk7XG4gIH1cblxuICAvLyB1c2VyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXNlcigpIHtcbiAgICB0aGlzLl91c2VyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXI7XG4gIH1cblxuICAvLyB1c2VybnNfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VybnNNb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1c2VybnNNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcm5zX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZXJuc01vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJuc01vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VybnNNb2RlKCkge1xuICAgIHRoaXMuX3VzZXJuc01vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJuc01vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcm5zTW9kZTtcbiAgfVxuXG4gIC8vIHdhaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2FpdD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgd2FpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd3YWl0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB3YWl0KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl93YWl0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2FpdCgpIHtcbiAgICB0aGlzLl93YWl0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3YWl0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dhaXQ7XG4gIH1cblxuICAvLyB3YWl0X3RpbWVvdXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2FpdFRpbWVvdXQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHdhaXRUaW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnd2FpdF90aW1lb3V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB3YWl0VGltZW91dCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fd2FpdFRpbWVvdXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXYWl0VGltZW91dCgpIHtcbiAgICB0aGlzLl93YWl0VGltZW91dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2FpdFRpbWVvdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2FpdFRpbWVvdXQ7XG4gIH1cblxuICAvLyB3b3JraW5nX2RpciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93b3JraW5nRGlyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB3b3JraW5nRGlyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd29ya2luZ19kaXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdvcmtpbmdEaXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3dvcmtpbmdEaXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXb3JraW5nRGlyKCkge1xuICAgIHRoaXMuX3dvcmtpbmdEaXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdvcmtpbmdEaXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya2luZ0RpcjtcbiAgfVxuXG4gIC8vIGNhcGFiaWxpdGllcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXBhYmlsaXRpZXMgPSBuZXcgQ29udGFpbmVyQ2FwYWJpbGl0aWVzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY2FwYWJpbGl0aWVzXCIpO1xuICBwdWJsaWMgZ2V0IGNhcGFiaWxpdGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWJpbGl0aWVzO1xuICB9XG4gIHB1YmxpYyBwdXRDYXBhYmlsaXRpZXModmFsdWU6IENvbnRhaW5lckNhcGFiaWxpdGllcykge1xuICAgIHRoaXMuX2NhcGFiaWxpdGllcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FwYWJpbGl0aWVzKCkge1xuICAgIHRoaXMuX2NhcGFiaWxpdGllcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXBhYmlsaXRpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWJpbGl0aWVzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBkZXZpY2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RldmljZXMgPSBuZXcgQ29udGFpbmVyRGV2aWNlc0xpc3QodGhpcywgXCJkZXZpY2VzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGRldmljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZXM7XG4gIH1cbiAgcHVibGljIHB1dERldmljZXModmFsdWU6IENvbnRhaW5lckRldmljZXNbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGV2aWNlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2aWNlcygpIHtcbiAgICB0aGlzLl9kZXZpY2VzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRldmljZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaGVhbHRoY2hlY2sgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGVhbHRoY2hlY2sgPSBuZXcgQ29udGFpbmVySGVhbHRoY2hlY2tPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJoZWFsdGhjaGVja1wiKTtcbiAgcHVibGljIGdldCBoZWFsdGhjaGVjaygpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhbHRoY2hlY2s7XG4gIH1cbiAgcHVibGljIHB1dEhlYWx0aGNoZWNrKHZhbHVlOiBDb250YWluZXJIZWFsdGhjaGVjaykge1xuICAgIHRoaXMuX2hlYWx0aGNoZWNrLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFsdGhjaGVjaygpIHtcbiAgICB0aGlzLl9oZWFsdGhjaGVjay5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoZWFsdGhjaGVja0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFsdGhjaGVjay5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ob3N0ID0gbmV3IENvbnRhaW5lckhvc3RMaXN0KHRoaXMsIFwiaG9zdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG4gIHB1YmxpYyBwdXRIb3N0KHZhbHVlOiBDb250YWluZXJIb3N0W10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2hvc3QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhvc3QoKSB7XG4gICAgdGhpcy5faG9zdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBob3N0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3QuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGxhYmVscyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYWJlbHMgPSBuZXcgQ29udGFpbmVyTGFiZWxzTGlzdCh0aGlzLCBcImxhYmVsc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBsYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVscztcbiAgfVxuICBwdWJsaWMgcHV0TGFiZWxzKHZhbHVlOiBDb250YWluZXJMYWJlbHNbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fbGFiZWxzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYWJlbHMoKSB7XG4gICAgdGhpcy5fbGFiZWxzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhYmVsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG1vdW50cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tb3VudHMgPSBuZXcgQ29udGFpbmVyTW91bnRzTGlzdCh0aGlzLCBcIm1vdW50c1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBtb3VudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vdW50cztcbiAgfVxuICBwdWJsaWMgcHV0TW91bnRzKHZhbHVlOiBDb250YWluZXJNb3VudHNbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fbW91bnRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNb3VudHMoKSB7XG4gICAgdGhpcy5fbW91bnRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1vdW50c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tb3VudHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtzX2FkdmFuY2VkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtzQWR2YW5jZWQgPSBuZXcgQ29udGFpbmVyTmV0d29ya3NBZHZhbmNlZExpc3QodGhpcywgXCJuZXR3b3Jrc19hZHZhbmNlZFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBuZXR3b3Jrc0FkdmFuY2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9uZXR3b3Jrc0FkdmFuY2VkO1xuICB9XG4gIHB1YmxpYyBwdXROZXR3b3Jrc0FkdmFuY2VkKHZhbHVlOiBDb250YWluZXJOZXR3b3Jrc0FkdmFuY2VkW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX25ldHdvcmtzQWR2YW5jZWQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5ldHdvcmtzQWR2YW5jZWQoKSB7XG4gICAgdGhpcy5fbmV0d29ya3NBZHZhbmNlZC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuZXR3b3Jrc0FkdmFuY2VkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldHdvcmtzQWR2YW5jZWQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHBvcnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BvcnRzID0gbmV3IENvbnRhaW5lclBvcnRzTGlzdCh0aGlzLCBcInBvcnRzXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCBwb3J0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydHM7XG4gIH1cbiAgcHVibGljIHB1dFBvcnRzKHZhbHVlOiBDb250YWluZXJQb3J0c1tdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9wb3J0cy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UG9ydHMoKSB7XG4gICAgdGhpcy5fcG9ydHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9ydHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHVsaW1pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91bGltaXQgPSBuZXcgQ29udGFpbmVyVWxpbWl0TGlzdCh0aGlzLCBcInVsaW1pdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB1bGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VsaW1pdDtcbiAgfVxuICBwdWJsaWMgcHV0VWxpbWl0KHZhbHVlOiBDb250YWluZXJVbGltaXRbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdWxpbWl0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVbGltaXQoKSB7XG4gICAgdGhpcy5fdWxpbWl0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVsaW1pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bGltaXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHVwbG9hZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91cGxvYWQgPSBuZXcgQ29udGFpbmVyVXBsb2FkTGlzdCh0aGlzLCBcInVwbG9hZFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB1cGxvYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwbG9hZDtcbiAgfVxuICBwdWJsaWMgcHV0VXBsb2FkKHZhbHVlOiBDb250YWluZXJVcGxvYWRbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdXBsb2FkLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVcGxvYWQoKSB7XG4gICAgdGhpcy5fdXBsb2FkLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVwbG9hZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91cGxvYWQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHZvbHVtZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdm9sdW1lcyA9IG5ldyBDb250YWluZXJWb2x1bWVzTGlzdCh0aGlzLCBcInZvbHVtZXNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdm9sdW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdm9sdW1lcztcbiAgfVxuICBwdWJsaWMgcHV0Vm9sdW1lcyh2YWx1ZTogQ29udGFpbmVyVm9sdW1lc1tdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl92b2x1bWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWb2x1bWVzKCkge1xuICAgIHRoaXMuX3ZvbHVtZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdm9sdW1lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92b2x1bWVzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF0dGFjaDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2F0dGFjaCksXG4gICAgICBjZ3JvdXBfcGFyZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jZ3JvdXBQYXJlbnQpLFxuICAgICAgY2dyb3VwbnNfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2dyb3VwbnNNb2RlKSxcbiAgICAgIGNvbW1hbmQ6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9jb21tYW5kKSxcbiAgICAgIGNvbnRhaW5lcl9yZWFkX3JlZnJlc2hfdGltZW91dF9taWxsaXNlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2NvbnRhaW5lclJlYWRSZWZyZXNoVGltZW91dE1pbGxpc2Vjb25kcyksXG4gICAgICBjcHVfcGVyaW9kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9jcHVQZXJpb2QpLFxuICAgICAgY3B1X3F1b3RhOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9jcHVRdW90YSksXG4gICAgICBjcHVfc2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jcHVTZXQpLFxuICAgICAgY3B1X3NoYXJlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fY3B1U2hhcmVzKSxcbiAgICAgIGNwdXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NwdXMpLFxuICAgICAgZGVzdHJveV9ncmFjZV9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9kZXN0cm95R3JhY2VTZWNvbmRzKSxcbiAgICAgIGRuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2RucyksXG4gICAgICBkbnNfb3B0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2Ruc09wdHMpLFxuICAgICAgZG5zX3NlYXJjaDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2Ruc1NlYXJjaCksXG4gICAgICBkb21haW5uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kb21haW5uYW1lKSxcbiAgICAgIGVudHJ5cG9pbnQ6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9lbnRyeXBvaW50KSxcbiAgICAgIGVudjogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2VudiksXG4gICAgICBncHVzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ncHVzKSxcbiAgICAgIGdyb3VwX2FkZDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2dyb3VwQWRkKSxcbiAgICAgIGhvc3RuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ob3N0bmFtZSksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgaW1hZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ltYWdlKSxcbiAgICAgIGluaXQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9pbml0KSxcbiAgICAgIGlwY19tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pcGNNb2RlKSxcbiAgICAgIGxvZ19kcml2ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xvZ0RyaXZlciksXG4gICAgICBsb2dfb3B0czogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fbG9nT3B0cyksXG4gICAgICBsb2dzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fbG9ncyksXG4gICAgICBtYXhfcmV0cnlfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21heFJldHJ5Q291bnQpLFxuICAgICAgbWVtb3J5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tZW1vcnkpLFxuICAgICAgbWVtb3J5X3N3YXA6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21lbW9yeVN3YXApLFxuICAgICAgbXVzdF9ydW46IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9tdXN0UnVuKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgbmV0d29ya19tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uZXR3b3JrTW9kZSksXG4gICAgICBwaWRfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGlkTW9kZSksXG4gICAgICBwcml2aWxlZ2VkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fcHJpdmlsZWdlZCksXG4gICAgICBwdWJsaXNoX2FsbF9wb3J0czogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3B1Ymxpc2hBbGxQb3J0cyksXG4gICAgICByZWFkX29ubHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZWFkT25seSksXG4gICAgICByZW1vdmVfdm9sdW1lczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3JlbW92ZVZvbHVtZXMpLFxuICAgICAgcmVzdGFydDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVzdGFydCksXG4gICAgICBybTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3JtKSxcbiAgICAgIHJ1bnRpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3J1bnRpbWUpLFxuICAgICAgc2VjdXJpdHlfb3B0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3NlY3VyaXR5T3B0cyksXG4gICAgICBzaG1fc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fc2htU2l6ZSksXG4gICAgICBzdGFydDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3N0YXJ0KSxcbiAgICAgIHN0ZGluX29wZW46IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdGRpbk9wZW4pLFxuICAgICAgc3RvcF9zaWduYWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3N0b3BTaWduYWwpLFxuICAgICAgc3RvcF90aW1lb3V0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9zdG9wVGltZW91dCksXG4gICAgICBzdG9yYWdlX29wdHM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3N0b3JhZ2VPcHRzKSxcbiAgICAgIHN5c2N0bHM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3N5c2N0bHMpLFxuICAgICAgdG1wZnM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RtcGZzKSxcbiAgICAgIHR0eTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3R0eSksXG4gICAgICB1c2VyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl91c2VyKSxcbiAgICAgIHVzZXJuc19tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl91c2VybnNNb2RlKSxcbiAgICAgIHdhaXQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl93YWl0KSxcbiAgICAgIHdhaXRfdGltZW91dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fd2FpdFRpbWVvdXQpLFxuICAgICAgd29ya2luZ19kaXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3dvcmtpbmdEaXIpLFxuICAgICAgY2FwYWJpbGl0aWVzOiBjb250YWluZXJDYXBhYmlsaXRpZXNUb1RlcnJhZm9ybSh0aGlzLl9jYXBhYmlsaXRpZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBkZXZpY2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNvbnRhaW5lckRldmljZXNUb1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fZGV2aWNlcy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGhlYWx0aGNoZWNrOiBjb250YWluZXJIZWFsdGhjaGVja1RvVGVycmFmb3JtKHRoaXMuX2hlYWx0aGNoZWNrLmludGVybmFsVmFsdWUpLFxuICAgICAgaG9zdDogY2RrdGYubGlzdE1hcHBlcihjb250YWluZXJIb3N0VG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX2hvc3QuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBsYWJlbHM6IGNka3RmLmxpc3RNYXBwZXIoY29udGFpbmVyTGFiZWxzVG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX2xhYmVscy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIG1vdW50czogY2RrdGYubGlzdE1hcHBlcihjb250YWluZXJNb3VudHNUb1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fbW91bnRzLmludGVybmFsVmFsdWUpLFxuICAgICAgbmV0d29ya3NfYWR2YW5jZWQ6IGNka3RmLmxpc3RNYXBwZXIoY29udGFpbmVyTmV0d29ya3NBZHZhbmNlZFRvVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9uZXR3b3Jrc0FkdmFuY2VkLmludGVybmFsVmFsdWUpLFxuICAgICAgcG9ydHM6IGNka3RmLmxpc3RNYXBwZXIoY29udGFpbmVyUG9ydHNUb1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fcG9ydHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB1bGltaXQ6IGNka3RmLmxpc3RNYXBwZXIoY29udGFpbmVyVWxpbWl0VG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX3VsaW1pdC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHVwbG9hZDogY2RrdGYubGlzdE1hcHBlcihjb250YWluZXJVcGxvYWRUb1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fdXBsb2FkLmludGVybmFsVmFsdWUpLFxuICAgICAgdm9sdW1lczogY2RrdGYubGlzdE1hcHBlcihjb250YWluZXJWb2x1bWVzVG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX3ZvbHVtZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBhdHRhY2g6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9hdHRhY2gpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgY2dyb3VwX3BhcmVudDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY2dyb3VwUGFyZW50KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY2dyb3VwbnNfbW9kZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY2dyb3VwbnNNb2RlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY29tbWFuZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2NvbW1hbmQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lcl9yZWFkX3JlZnJlc2hfdGltZW91dF9taWxsaXNlY29uZHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX2NvbnRhaW5lclJlYWRSZWZyZXNoVGltZW91dE1pbGxpc2Vjb25kcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIGNwdV9wZXJpb2Q6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX2NwdVBlcmlvZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIGNwdV9xdW90YToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fY3B1UXVvdGEpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBjcHVfc2V0OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jcHVTZXQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBjcHVfc2hhcmVzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9jcHVTaGFyZXMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBjcHVzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jcHVzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZGVzdHJveV9ncmFjZV9zZWNvbmRzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9kZXN0cm95R3JhY2VTZWNvbmRzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgZG5zOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fZG5zKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGRuc19vcHRzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fZG5zT3B0cyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBkbnNfc2VhcmNoOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fZG5zU2VhcmNoKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGRvbWFpbm5hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2RvbWFpbm5hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBlbnRyeXBvaW50OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fZW50cnlwb2ludCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgZW52OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fZW52KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGdwdXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2dwdXMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBncm91cF9hZGQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9ncm91cEFkZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBob3N0bmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faG9zdG5hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpbWFnZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faW1hZ2UpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpbml0OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5faW5pdCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBpcGNfbW9kZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faXBjTW9kZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGxvZ19kcml2ZXI6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2xvZ0RyaXZlciksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGxvZ19vcHRzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl9sb2dPcHRzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgbG9nczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2xvZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgbWF4X3JldHJ5X2NvdW50OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9tYXhSZXRyeUNvdW50KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgbWVtb3J5OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9tZW1vcnkpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBtZW1vcnlfc3dhcDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fbWVtb3J5U3dhcCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIG11c3RfcnVuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fbXVzdFJ1biksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbmV0d29ya19tb2RlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uZXR3b3JrTW9kZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHBpZF9tb2RlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9waWRNb2RlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcHJpdmlsZWdlZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3ByaXZpbGVnZWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgcHVibGlzaF9hbGxfcG9ydHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9wdWJsaXNoQWxsUG9ydHMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgcmVhZF9vbmx5OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fcmVhZE9ubHkpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgcmVtb3ZlX3ZvbHVtZXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9yZW1vdmVWb2x1bWVzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHJlc3RhcnQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3Jlc3RhcnQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBybToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3JtKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3J1bnRpbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzZWN1cml0eV9vcHRzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fc2VjdXJpdHlPcHRzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHNobV9zaXplOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9zaG1TaXplKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgc3RhcnQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9zdGFydCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBzdGRpbl9vcGVuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fc3RkaW5PcGVuKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHN0b3Bfc2lnbmFsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zdG9wU2lnbmFsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc3RvcF90aW1lb3V0OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9zdG9wVGltZW91dCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHN0b3JhZ2Vfb3B0czoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fc3RvcmFnZU9wdHMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICBzeXNjdGxzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl9zeXNjdGxzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdG1wZnM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RtcGZzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdHR5OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fdHR5KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3VzZXIpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB1c2VybnNfbW9kZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdXNlcm5zTW9kZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHdhaXQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl93YWl0KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHdhaXRfdGltZW91dDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fd2FpdFRpbWVvdXQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB3b3JraW5nX2Rpcjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fd29ya2luZ0RpciksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGNhcGFiaWxpdGllczoge1xuICAgICAgICB2YWx1ZTogY29udGFpbmVyQ2FwYWJpbGl0aWVzVG9IY2xUZXJyYWZvcm0odGhpcy5fY2FwYWJpbGl0aWVzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvbnRhaW5lckNhcGFiaWxpdGllc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBkZXZpY2VzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNvbnRhaW5lckRldmljZXNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fZGV2aWNlcy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDb250YWluZXJEZXZpY2VzTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGhlYWx0aGNoZWNrOiB7XG4gICAgICAgIHZhbHVlOiBjb250YWluZXJIZWFsdGhjaGVja1RvSGNsVGVycmFmb3JtKHRoaXMuX2hlYWx0aGNoZWNrLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDb250YWluZXJIZWFsdGhjaGVja0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBob3N0OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNvbnRhaW5lckhvc3RUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5faG9zdC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDb250YWluZXJIb3N0TGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjb250YWluZXJMYWJlbHNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fbGFiZWxzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvbnRhaW5lckxhYmVsc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBtb3VudHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY29udGFpbmVyTW91bnRzVG9IY2xUZXJyYWZvcm0sIHRydWUpKHRoaXMuX21vdW50cy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDb250YWluZXJNb3VudHNMaXN0XCIsXG4gICAgICB9LFxuICAgICAgbmV0d29ya3NfYWR2YW5jZWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY29udGFpbmVyTmV0d29ya3NBZHZhbmNlZFRvSGNsVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9uZXR3b3Jrc0FkdmFuY2VkLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvbnRhaW5lck5ldHdvcmtzQWR2YW5jZWRMaXN0XCIsXG4gICAgICB9LFxuICAgICAgcG9ydHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY29udGFpbmVyUG9ydHNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fcG9ydHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvbnRhaW5lclBvcnRzTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHVsaW1pdDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjb250YWluZXJVbGltaXRUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fdWxpbWl0LmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvbnRhaW5lclVsaW1pdExpc3RcIixcbiAgICAgIH0sXG4gICAgICB1cGxvYWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY29udGFpbmVyVXBsb2FkVG9IY2xUZXJyYWZvcm0sIHRydWUpKHRoaXMuX3VwbG9hZC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDb250YWluZXJVcGxvYWRMaXN0XCIsXG4gICAgICB9LFxuICAgICAgdm9sdW1lczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjb250YWluZXJWb2x1bWVzVG9IY2xUZXJyYWZvcm0sIHRydWUpKHRoaXMuX3ZvbHVtZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ29udGFpbmVyVm9sdW1lc0xpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==