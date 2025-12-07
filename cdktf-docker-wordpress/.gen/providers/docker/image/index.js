"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.ImageTimeoutsOutputReference = exports.ImageBuildOutputReference = exports.ImageBuildUlimitList = exports.ImageBuildUlimitOutputReference = exports.ImageBuildSecretsList = exports.ImageBuildSecretsOutputReference = exports.ImageBuildAuthConfigList = exports.ImageBuildAuthConfigOutputReference = void 0;
exports.imageBuildAuthConfigToTerraform = imageBuildAuthConfigToTerraform;
exports.imageBuildAuthConfigToHclTerraform = imageBuildAuthConfigToHclTerraform;
exports.imageBuildSecretsToTerraform = imageBuildSecretsToTerraform;
exports.imageBuildSecretsToHclTerraform = imageBuildSecretsToHclTerraform;
exports.imageBuildUlimitToTerraform = imageBuildUlimitToTerraform;
exports.imageBuildUlimitToHclTerraform = imageBuildUlimitToHclTerraform;
exports.imageBuildToTerraform = imageBuildToTerraform;
exports.imageBuildToHclTerraform = imageBuildToHclTerraform;
exports.imageTimeoutsToTerraform = imageTimeoutsToTerraform;
exports.imageTimeoutsToHclTerraform = imageTimeoutsToHclTerraform;
const cdktf = require("cdktf");
function imageBuildAuthConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth: cdktf.stringToTerraform(struct.auth),
        email: cdktf.stringToTerraform(struct.email),
        host_name: cdktf.stringToTerraform(struct.hostName),
        identity_token: cdktf.stringToTerraform(struct.identityToken),
        password: cdktf.stringToTerraform(struct.password),
        registry_token: cdktf.stringToTerraform(struct.registryToken),
        server_address: cdktf.stringToTerraform(struct.serverAddress),
        user_name: cdktf.stringToTerraform(struct.userName),
    };
}
function imageBuildAuthConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auth: {
            value: cdktf.stringToHclTerraform(struct.auth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_name: {
            value: cdktf.stringToHclTerraform(struct.hostName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_token: {
            value: cdktf.stringToHclTerraform(struct.identityToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        registry_token: {
            value: cdktf.stringToHclTerraform(struct.registryToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_address: {
            value: cdktf.stringToHclTerraform(struct.serverAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_name: {
            value: cdktf.stringToHclTerraform(struct.userName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ImageBuildAuthConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._auth !== undefined) {
            hasAnyValues = true;
            internalValueResult.auth = this._auth;
        }
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        if (this._hostName !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostName = this._hostName;
        }
        if (this._identityToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityToken = this._identityToken;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._registryToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.registryToken = this._registryToken;
        }
        if (this._serverAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverAddress = this._serverAddress;
        }
        if (this._userName !== undefined) {
            hasAnyValues = true;
            internalValueResult.userName = this._userName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._auth = undefined;
            this._email = undefined;
            this._hostName = undefined;
            this._identityToken = undefined;
            this._password = undefined;
            this._registryToken = undefined;
            this._serverAddress = undefined;
            this._userName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._auth = value.auth;
            this._email = value.email;
            this._hostName = value.hostName;
            this._identityToken = value.identityToken;
            this._password = value.password;
            this._registryToken = value.registryToken;
            this._serverAddress = value.serverAddress;
            this._userName = value.userName;
        }
    }
    get auth() {
        return this.getStringAttribute('auth');
    }
    set auth(value) {
        this._auth = value;
    }
    resetAuth() {
        this._auth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authInput() {
        return this._auth;
    }
    get email() {
        return this.getStringAttribute('email');
    }
    set email(value) {
        this._email = value;
    }
    resetEmail() {
        this._email = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email;
    }
    get hostName() {
        return this.getStringAttribute('host_name');
    }
    set hostName(value) {
        this._hostName = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostNameInput() {
        return this._hostName;
    }
    get identityToken() {
        return this.getStringAttribute('identity_token');
    }
    set identityToken(value) {
        this._identityToken = value;
    }
    resetIdentityToken() {
        this._identityToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get identityTokenInput() {
        return this._identityToken;
    }
    get password() {
        return this.getStringAttribute('password');
    }
    set password(value) {
        this._password = value;
    }
    resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordInput() {
        return this._password;
    }
    get registryToken() {
        return this.getStringAttribute('registry_token');
    }
    set registryToken(value) {
        this._registryToken = value;
    }
    resetRegistryToken() {
        this._registryToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get registryTokenInput() {
        return this._registryToken;
    }
    get serverAddress() {
        return this.getStringAttribute('server_address');
    }
    set serverAddress(value) {
        this._serverAddress = value;
    }
    resetServerAddress() {
        this._serverAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverAddressInput() {
        return this._serverAddress;
    }
    get userName() {
        return this.getStringAttribute('user_name');
    }
    set userName(value) {
        this._userName = value;
    }
    resetUserName() {
        this._userName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userNameInput() {
        return this._userName;
    }
}
exports.ImageBuildAuthConfigOutputReference = ImageBuildAuthConfigOutputReference;
class ImageBuildAuthConfigList extends cdktf.ComplexList {
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
        return new ImageBuildAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ImageBuildAuthConfigList = ImageBuildAuthConfigList;
function imageBuildSecretsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        env: cdktf.stringToTerraform(struct.env),
        id: cdktf.stringToTerraform(struct.id),
        src: cdktf.stringToTerraform(struct.src),
    };
}
function imageBuildSecretsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        env: {
            value: cdktf.stringToHclTerraform(struct.env),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        src: {
            value: cdktf.stringToHclTerraform(struct.src),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ImageBuildSecretsOutputReference extends cdktf.ComplexObject {
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
        if (this._env !== undefined) {
            hasAnyValues = true;
            internalValueResult.env = this._env;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._src !== undefined) {
            hasAnyValues = true;
            internalValueResult.src = this._src;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._env = undefined;
            this._id = undefined;
            this._src = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._env = value.env;
            this._id = value.id;
            this._src = value.src;
        }
    }
    get env() {
        return this.getStringAttribute('env');
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
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    get src() {
        return this.getStringAttribute('src');
    }
    set src(value) {
        this._src = value;
    }
    resetSrc() {
        this._src = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get srcInput() {
        return this._src;
    }
}
exports.ImageBuildSecretsOutputReference = ImageBuildSecretsOutputReference;
class ImageBuildSecretsList extends cdktf.ComplexList {
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
        return new ImageBuildSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ImageBuildSecretsList = ImageBuildSecretsList;
function imageBuildUlimitToTerraform(struct) {
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
function imageBuildUlimitToHclTerraform(struct) {
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
class ImageBuildUlimitOutputReference extends cdktf.ComplexObject {
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
exports.ImageBuildUlimitOutputReference = ImageBuildUlimitOutputReference;
class ImageBuildUlimitList extends cdktf.ComplexList {
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
        return new ImageBuildUlimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ImageBuildUlimitList = ImageBuildUlimitList;
function imageBuildToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        build_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct.buildArgs),
        build_id: cdktf.stringToTerraform(struct.buildId),
        build_log_file: cdktf.stringToTerraform(struct.buildLogFile),
        builder: cdktf.stringToTerraform(struct.builder),
        cache_from: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.cacheFrom),
        cgroup_parent: cdktf.stringToTerraform(struct.cgroupParent),
        context: cdktf.stringToTerraform(struct.context),
        cpu_period: cdktf.numberToTerraform(struct.cpuPeriod),
        cpu_quota: cdktf.numberToTerraform(struct.cpuQuota),
        cpu_set_cpus: cdktf.stringToTerraform(struct.cpuSetCpus),
        cpu_set_mems: cdktf.stringToTerraform(struct.cpuSetMems),
        cpu_shares: cdktf.numberToTerraform(struct.cpuShares),
        dockerfile: cdktf.stringToTerraform(struct.dockerfile),
        extra_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.extraHosts),
        force_remove: cdktf.booleanToTerraform(struct.forceRemove),
        isolation: cdktf.stringToTerraform(struct.isolation),
        label: cdktf.hashMapper(cdktf.stringToTerraform)(struct.label),
        labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct.labels),
        memory: cdktf.numberToTerraform(struct.memory),
        memory_swap: cdktf.numberToTerraform(struct.memorySwap),
        network_mode: cdktf.stringToTerraform(struct.networkMode),
        no_cache: cdktf.booleanToTerraform(struct.noCache),
        platform: cdktf.stringToTerraform(struct.platform),
        pull_parent: cdktf.booleanToTerraform(struct.pullParent),
        remote_context: cdktf.stringToTerraform(struct.remoteContext),
        remove: cdktf.booleanToTerraform(struct.remove),
        security_opt: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.securityOpt),
        session_id: cdktf.stringToTerraform(struct.sessionId),
        shm_size: cdktf.numberToTerraform(struct.shmSize),
        squash: cdktf.booleanToTerraform(struct.squash),
        suppress_output: cdktf.booleanToTerraform(struct.suppressOutput),
        tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.tag),
        target: cdktf.stringToTerraform(struct.target),
        version: cdktf.stringToTerraform(struct.version),
        auth_config: cdktf.listMapper(imageBuildAuthConfigToTerraform, true)(struct.authConfig),
        secrets: cdktf.listMapper(imageBuildSecretsToTerraform, true)(struct.secrets),
        ulimit: cdktf.listMapper(imageBuildUlimitToTerraform, true)(struct.ulimit),
    };
}
function imageBuildToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        build_args: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.buildArgs),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        build_id: {
            value: cdktf.stringToHclTerraform(struct.buildId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        build_log_file: {
            value: cdktf.stringToHclTerraform(struct.buildLogFile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        builder: {
            value: cdktf.stringToHclTerraform(struct.builder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_from: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.cacheFrom),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cgroup_parent: {
            value: cdktf.stringToHclTerraform(struct.cgroupParent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        context: {
            value: cdktf.stringToHclTerraform(struct.context),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_period: {
            value: cdktf.numberToHclTerraform(struct.cpuPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        cpu_quota: {
            value: cdktf.numberToHclTerraform(struct.cpuQuota),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        cpu_set_cpus: {
            value: cdktf.stringToHclTerraform(struct.cpuSetCpus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_set_mems: {
            value: cdktf.stringToHclTerraform(struct.cpuSetMems),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_shares: {
            value: cdktf.numberToHclTerraform(struct.cpuShares),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dockerfile: {
            value: cdktf.stringToHclTerraform(struct.dockerfile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        extra_hosts: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.extraHosts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        force_remove: {
            value: cdktf.booleanToHclTerraform(struct.forceRemove),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        isolation: {
            value: cdktf.stringToHclTerraform(struct.isolation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.label),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        labels: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.labels),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        memory: {
            value: cdktf.numberToHclTerraform(struct.memory),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        memory_swap: {
            value: cdktf.numberToHclTerraform(struct.memorySwap),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        network_mode: {
            value: cdktf.stringToHclTerraform(struct.networkMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        no_cache: {
            value: cdktf.booleanToHclTerraform(struct.noCache),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        platform: {
            value: cdktf.stringToHclTerraform(struct.platform),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pull_parent: {
            value: cdktf.booleanToHclTerraform(struct.pullParent),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remote_context: {
            value: cdktf.stringToHclTerraform(struct.remoteContext),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        remove: {
            value: cdktf.booleanToHclTerraform(struct.remove),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        security_opt: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.securityOpt),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        session_id: {
            value: cdktf.stringToHclTerraform(struct.sessionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shm_size: {
            value: cdktf.numberToHclTerraform(struct.shmSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        squash: {
            value: cdktf.booleanToHclTerraform(struct.squash),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        suppress_output: {
            value: cdktf.booleanToHclTerraform(struct.suppressOutput),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        tag: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.tag),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktf.stringToHclTerraform(struct.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_config: {
            value: cdktf.listMapperHcl(imageBuildAuthConfigToHclTerraform, true)(struct.authConfig),
            isBlock: true,
            type: "list",
            storageClassType: "ImageBuildAuthConfigList",
        },
        secrets: {
            value: cdktf.listMapperHcl(imageBuildSecretsToHclTerraform, true)(struct.secrets),
            isBlock: true,
            type: "list",
            storageClassType: "ImageBuildSecretsList",
        },
        ulimit: {
            value: cdktf.listMapperHcl(imageBuildUlimitToHclTerraform, true)(struct.ulimit),
            isBlock: true,
            type: "list",
            storageClassType: "ImageBuildUlimitList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ImageBuildOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // auth_config - computed: false, optional: true, required: false
        this._authConfig = new ImageBuildAuthConfigList(this, "auth_config", false);
        // secrets - computed: false, optional: true, required: false
        this._secrets = new ImageBuildSecretsList(this, "secrets", false);
        // ulimit - computed: false, optional: true, required: false
        this._ulimit = new ImageBuildUlimitList(this, "ulimit", false);
    }
    get internalValue() {
        var _a, _b, _c, _d, _e, _f;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._buildArgs !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildArgs = this._buildArgs;
        }
        if (this._buildId !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildId = this._buildId;
        }
        if (this._buildLogFile !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildLogFile = this._buildLogFile;
        }
        if (this._builder !== undefined) {
            hasAnyValues = true;
            internalValueResult.builder = this._builder;
        }
        if (this._cacheFrom !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheFrom = this._cacheFrom;
        }
        if (this._cgroupParent !== undefined) {
            hasAnyValues = true;
            internalValueResult.cgroupParent = this._cgroupParent;
        }
        if (this._context !== undefined) {
            hasAnyValues = true;
            internalValueResult.context = this._context;
        }
        if (this._cpuPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuPeriod = this._cpuPeriod;
        }
        if (this._cpuQuota !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuQuota = this._cpuQuota;
        }
        if (this._cpuSetCpus !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuSetCpus = this._cpuSetCpus;
        }
        if (this._cpuSetMems !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuSetMems = this._cpuSetMems;
        }
        if (this._cpuShares !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuShares = this._cpuShares;
        }
        if (this._dockerfile !== undefined) {
            hasAnyValues = true;
            internalValueResult.dockerfile = this._dockerfile;
        }
        if (this._extraHosts !== undefined) {
            hasAnyValues = true;
            internalValueResult.extraHosts = this._extraHosts;
        }
        if (this._forceRemove !== undefined) {
            hasAnyValues = true;
            internalValueResult.forceRemove = this._forceRemove;
        }
        if (this._isolation !== undefined) {
            hasAnyValues = true;
            internalValueResult.isolation = this._isolation;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._labels !== undefined) {
            hasAnyValues = true;
            internalValueResult.labels = this._labels;
        }
        if (this._memory !== undefined) {
            hasAnyValues = true;
            internalValueResult.memory = this._memory;
        }
        if (this._memorySwap !== undefined) {
            hasAnyValues = true;
            internalValueResult.memorySwap = this._memorySwap;
        }
        if (this._networkMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkMode = this._networkMode;
        }
        if (this._noCache !== undefined) {
            hasAnyValues = true;
            internalValueResult.noCache = this._noCache;
        }
        if (this._platform !== undefined) {
            hasAnyValues = true;
            internalValueResult.platform = this._platform;
        }
        if (this._pullParent !== undefined) {
            hasAnyValues = true;
            internalValueResult.pullParent = this._pullParent;
        }
        if (this._remoteContext !== undefined) {
            hasAnyValues = true;
            internalValueResult.remoteContext = this._remoteContext;
        }
        if (this._remove !== undefined) {
            hasAnyValues = true;
            internalValueResult.remove = this._remove;
        }
        if (this._securityOpt !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityOpt = this._securityOpt;
        }
        if (this._sessionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionId = this._sessionId;
        }
        if (this._shmSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.shmSize = this._shmSize;
        }
        if (this._squash !== undefined) {
            hasAnyValues = true;
            internalValueResult.squash = this._squash;
        }
        if (this._suppressOutput !== undefined) {
            hasAnyValues = true;
            internalValueResult.suppressOutput = this._suppressOutput;
        }
        if (this._tag !== undefined) {
            hasAnyValues = true;
            internalValueResult.tag = this._tag;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        if (((_a = this._authConfig) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
            hasAnyValues = true;
            internalValueResult.authConfig = (_b = this._authConfig) === null || _b === void 0 ? void 0 : _b.internalValue;
        }
        if (((_c = this._secrets) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
            hasAnyValues = true;
            internalValueResult.secrets = (_d = this._secrets) === null || _d === void 0 ? void 0 : _d.internalValue;
        }
        if (((_e = this._ulimit) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
            hasAnyValues = true;
            internalValueResult.ulimit = (_f = this._ulimit) === null || _f === void 0 ? void 0 : _f.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._buildArgs = undefined;
            this._buildId = undefined;
            this._buildLogFile = undefined;
            this._builder = undefined;
            this._cacheFrom = undefined;
            this._cgroupParent = undefined;
            this._context = undefined;
            this._cpuPeriod = undefined;
            this._cpuQuota = undefined;
            this._cpuSetCpus = undefined;
            this._cpuSetMems = undefined;
            this._cpuShares = undefined;
            this._dockerfile = undefined;
            this._extraHosts = undefined;
            this._forceRemove = undefined;
            this._isolation = undefined;
            this._label = undefined;
            this._labels = undefined;
            this._memory = undefined;
            this._memorySwap = undefined;
            this._networkMode = undefined;
            this._noCache = undefined;
            this._platform = undefined;
            this._pullParent = undefined;
            this._remoteContext = undefined;
            this._remove = undefined;
            this._securityOpt = undefined;
            this._sessionId = undefined;
            this._shmSize = undefined;
            this._squash = undefined;
            this._suppressOutput = undefined;
            this._tag = undefined;
            this._target = undefined;
            this._version = undefined;
            this._authConfig.internalValue = undefined;
            this._secrets.internalValue = undefined;
            this._ulimit.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._buildArgs = value.buildArgs;
            this._buildId = value.buildId;
            this._buildLogFile = value.buildLogFile;
            this._builder = value.builder;
            this._cacheFrom = value.cacheFrom;
            this._cgroupParent = value.cgroupParent;
            this._context = value.context;
            this._cpuPeriod = value.cpuPeriod;
            this._cpuQuota = value.cpuQuota;
            this._cpuSetCpus = value.cpuSetCpus;
            this._cpuSetMems = value.cpuSetMems;
            this._cpuShares = value.cpuShares;
            this._dockerfile = value.dockerfile;
            this._extraHosts = value.extraHosts;
            this._forceRemove = value.forceRemove;
            this._isolation = value.isolation;
            this._label = value.label;
            this._labels = value.labels;
            this._memory = value.memory;
            this._memorySwap = value.memorySwap;
            this._networkMode = value.networkMode;
            this._noCache = value.noCache;
            this._platform = value.platform;
            this._pullParent = value.pullParent;
            this._remoteContext = value.remoteContext;
            this._remove = value.remove;
            this._securityOpt = value.securityOpt;
            this._sessionId = value.sessionId;
            this._shmSize = value.shmSize;
            this._squash = value.squash;
            this._suppressOutput = value.suppressOutput;
            this._tag = value.tag;
            this._target = value.target;
            this._version = value.version;
            this._authConfig.internalValue = value.authConfig;
            this._secrets.internalValue = value.secrets;
            this._ulimit.internalValue = value.ulimit;
        }
    }
    get buildArgs() {
        return this.getStringMapAttribute('build_args');
    }
    set buildArgs(value) {
        this._buildArgs = value;
    }
    resetBuildArgs() {
        this._buildArgs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildArgsInput() {
        return this._buildArgs;
    }
    get buildId() {
        return this.getStringAttribute('build_id');
    }
    set buildId(value) {
        this._buildId = value;
    }
    resetBuildId() {
        this._buildId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildIdInput() {
        return this._buildId;
    }
    get buildLogFile() {
        return this.getStringAttribute('build_log_file');
    }
    set buildLogFile(value) {
        this._buildLogFile = value;
    }
    resetBuildLogFile() {
        this._buildLogFile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildLogFileInput() {
        return this._buildLogFile;
    }
    get builder() {
        return this.getStringAttribute('builder');
    }
    set builder(value) {
        this._builder = value;
    }
    resetBuilder() {
        this._builder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get builderInput() {
        return this._builder;
    }
    get cacheFrom() {
        return this.getListAttribute('cache_from');
    }
    set cacheFrom(value) {
        this._cacheFrom = value;
    }
    resetCacheFrom() {
        this._cacheFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheFromInput() {
        return this._cacheFrom;
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
    get context() {
        return this.getStringAttribute('context');
    }
    set context(value) {
        this._context = value;
    }
    // Temporarily expose input value. Use with caution.
    get contextInput() {
        return this._context;
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
    get cpuSetCpus() {
        return this.getStringAttribute('cpu_set_cpus');
    }
    set cpuSetCpus(value) {
        this._cpuSetCpus = value;
    }
    resetCpuSetCpus() {
        this._cpuSetCpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuSetCpusInput() {
        return this._cpuSetCpus;
    }
    get cpuSetMems() {
        return this.getStringAttribute('cpu_set_mems');
    }
    set cpuSetMems(value) {
        this._cpuSetMems = value;
    }
    resetCpuSetMems() {
        this._cpuSetMems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuSetMemsInput() {
        return this._cpuSetMems;
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
    get dockerfile() {
        return this.getStringAttribute('dockerfile');
    }
    set dockerfile(value) {
        this._dockerfile = value;
    }
    resetDockerfile() {
        this._dockerfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dockerfileInput() {
        return this._dockerfile;
    }
    get extraHosts() {
        return this.getListAttribute('extra_hosts');
    }
    set extraHosts(value) {
        this._extraHosts = value;
    }
    resetExtraHosts() {
        this._extraHosts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get extraHostsInput() {
        return this._extraHosts;
    }
    get forceRemove() {
        return this.getBooleanAttribute('force_remove');
    }
    set forceRemove(value) {
        this._forceRemove = value;
    }
    resetForceRemove() {
        this._forceRemove = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceRemoveInput() {
        return this._forceRemove;
    }
    get isolation() {
        return this.getStringAttribute('isolation');
    }
    set isolation(value) {
        this._isolation = value;
    }
    resetIsolation() {
        this._isolation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isolationInput() {
        return this._isolation;
    }
    get label() {
        return this.getStringMapAttribute('label');
    }
    set label(value) {
        this._label = value;
    }
    resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelInput() {
        return this._label;
    }
    get labels() {
        return this.getStringMapAttribute('labels');
    }
    set labels(value) {
        this._labels = value;
    }
    resetLabels() {
        this._labels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelsInput() {
        return this._labels;
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
    get noCache() {
        return this.getBooleanAttribute('no_cache');
    }
    set noCache(value) {
        this._noCache = value;
    }
    resetNoCache() {
        this._noCache = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noCacheInput() {
        return this._noCache;
    }
    get platform() {
        return this.getStringAttribute('platform');
    }
    set platform(value) {
        this._platform = value;
    }
    resetPlatform() {
        this._platform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get platformInput() {
        return this._platform;
    }
    get pullParent() {
        return this.getBooleanAttribute('pull_parent');
    }
    set pullParent(value) {
        this._pullParent = value;
    }
    resetPullParent() {
        this._pullParent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pullParentInput() {
        return this._pullParent;
    }
    get remoteContext() {
        return this.getStringAttribute('remote_context');
    }
    set remoteContext(value) {
        this._remoteContext = value;
    }
    resetRemoteContext() {
        this._remoteContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get remoteContextInput() {
        return this._remoteContext;
    }
    get remove() {
        return this.getBooleanAttribute('remove');
    }
    set remove(value) {
        this._remove = value;
    }
    resetRemove() {
        this._remove = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get removeInput() {
        return this._remove;
    }
    get securityOpt() {
        return this.getListAttribute('security_opt');
    }
    set securityOpt(value) {
        this._securityOpt = value;
    }
    resetSecurityOpt() {
        this._securityOpt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityOptInput() {
        return this._securityOpt;
    }
    get sessionId() {
        return this.getStringAttribute('session_id');
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    resetSessionId() {
        this._sessionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionIdInput() {
        return this._sessionId;
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
    get squash() {
        return this.getBooleanAttribute('squash');
    }
    set squash(value) {
        this._squash = value;
    }
    resetSquash() {
        this._squash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get squashInput() {
        return this._squash;
    }
    get suppressOutput() {
        return this.getBooleanAttribute('suppress_output');
    }
    set suppressOutput(value) {
        this._suppressOutput = value;
    }
    resetSuppressOutput() {
        this._suppressOutput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get suppressOutputInput() {
        return this._suppressOutput;
    }
    get tag() {
        return this.getListAttribute('tag');
    }
    set tag(value) {
        this._tag = value;
    }
    resetTag() {
        this._tag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagInput() {
        return this._tag;
    }
    get target() {
        return this.getStringAttribute('target');
    }
    set target(value) {
        this._target = value;
    }
    resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetInput() {
        return this._target;
    }
    get version() {
        return this.getStringAttribute('version');
    }
    set version(value) {
        this._version = value;
    }
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionInput() {
        return this._version;
    }
    get authConfig() {
        return this._authConfig;
    }
    putAuthConfig(value) {
        this._authConfig.internalValue = value;
    }
    resetAuthConfig() {
        this._authConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authConfigInput() {
        return this._authConfig.internalValue;
    }
    get secrets() {
        return this._secrets;
    }
    putSecrets(value) {
        this._secrets.internalValue = value;
    }
    resetSecrets() {
        this._secrets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretsInput() {
        return this._secrets.internalValue;
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
}
exports.ImageBuildOutputReference = ImageBuildOutputReference;
function imageTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
function imageTimeoutsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        create: {
            value: cdktf.stringToHclTerraform(struct.create),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delete: {
            value: cdktf.stringToHclTerraform(struct.delete),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update: {
            value: cdktf.stringToHclTerraform(struct.update),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
class ImageTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._create !== undefined) {
            hasAnyValues = true;
            internalValueResult.create = this._create;
        }
        if (this._delete !== undefined) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        if (this._update !== undefined) {
            hasAnyValues = true;
            internalValueResult.update = this._update;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._create = undefined;
            this._delete = undefined;
            this._update = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._create = value.create;
            this._delete = value.delete;
            this._update = value.update;
        }
    }
    get create() {
        return this.getStringAttribute('create');
    }
    set create(value) {
        this._create = value;
    }
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createInput() {
        return this._create;
    }
    get delete() {
        return this.getStringAttribute('delete');
    }
    set delete(value) {
        this._delete = value;
    }
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteInput() {
        return this._delete;
    }
    get update() {
        return this.getStringAttribute('update');
    }
    set update(value) {
        this._update = value;
    }
    resetUpdate() {
        this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateInput() {
        return this._update;
    }
}
exports.ImageTimeoutsOutputReference = ImageTimeoutsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image docker_image}
*/
class Image extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Image to import
    * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Image to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_image", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image docker_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImageConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'docker_image',
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
        // build - computed: false, optional: true, required: false
        this._build = new ImageBuildOutputReference(this, "build");
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new ImageTimeoutsOutputReference(this, "timeouts");
        this._forceRemove = config.forceRemove;
        this._keepLocally = config.keepLocally;
        this._name = config.name;
        this._platform = config.platform;
        this._pullTriggers = config.pullTriggers;
        this._triggers = config.triggers;
        this._build.internalValue = config.buildAttribute;
        this._timeouts.internalValue = config.timeouts;
    }
    get forceRemove() {
        return this.getBooleanAttribute('force_remove');
    }
    set forceRemove(value) {
        this._forceRemove = value;
    }
    resetForceRemove() {
        this._forceRemove = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceRemoveInput() {
        return this._forceRemove;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // image_id - computed: true, optional: false, required: false
    get imageId() {
        return this.getStringAttribute('image_id');
    }
    get keepLocally() {
        return this.getBooleanAttribute('keep_locally');
    }
    set keepLocally(value) {
        this._keepLocally = value;
    }
    resetKeepLocally() {
        this._keepLocally = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keepLocallyInput() {
        return this._keepLocally;
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
    get platform() {
        return this.getStringAttribute('platform');
    }
    set platform(value) {
        this._platform = value;
    }
    resetPlatform() {
        this._platform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get platformInput() {
        return this._platform;
    }
    get pullTriggers() {
        return cdktf.Fn.tolist(this.getListAttribute('pull_triggers'));
    }
    set pullTriggers(value) {
        this._pullTriggers = value;
    }
    resetPullTriggers() {
        this._pullTriggers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pullTriggersInput() {
        return this._pullTriggers;
    }
    // repo_digest - computed: true, optional: false, required: false
    get repoDigest() {
        return this.getStringAttribute('repo_digest');
    }
    get triggers() {
        return this.getStringMapAttribute('triggers');
    }
    set triggers(value) {
        this._triggers = value;
    }
    resetTriggers() {
        this._triggers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get triggersInput() {
        return this._triggers;
    }
    get buildAttribute() {
        return this._build;
    }
    putBuildAttribute(value) {
        this._build.internalValue = value;
    }
    resetBuildAttribute() {
        this._build.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildAttributeInput() {
        return this._build.internalValue;
    }
    get timeouts() {
        return this._timeouts;
    }
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            force_remove: cdktf.booleanToTerraform(this._forceRemove),
            keep_locally: cdktf.booleanToTerraform(this._keepLocally),
            name: cdktf.stringToTerraform(this._name),
            platform: cdktf.stringToTerraform(this._platform),
            pull_triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pullTriggers),
            triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
            build: imageBuildToTerraform(this._build.internalValue),
            timeouts: imageTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            force_remove: {
                value: cdktf.booleanToHclTerraform(this._forceRemove),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            keep_locally: {
                value: cdktf.booleanToHclTerraform(this._keepLocally),
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
            platform: {
                value: cdktf.stringToHclTerraform(this._platform),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pull_triggers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pullTriggers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            triggers: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            build: {
                value: imageBuildToHclTerraform(this._build.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ImageBuildList",
            },
            timeouts: {
                value: imageTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ImageTimeouts",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.Image = Image;
// =================
// STATIC PROPERTIES
// =================
Image.tfResourceType = "docker_image";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0ZBQXdGO0FBQ3hGLDJDQUEyQzs7O0FBNEczQywwRUFlQztBQUdELGdGQTBEQztBQWlRRCxvRUFVQztBQUdELDBFQTRCQztBQWdKRCxrRUFVQztBQUdELHdFQTRCQztBQXNWRCxzREE0Q0M7QUFHRCw0REF3T0M7QUFzMUJELDREQVVDO0FBR0Qsa0VBNEJDO0FBcG9FRCwrQkFBK0I7QUF5Ry9CLFNBQWdCLCtCQUErQixDQUFDLE1BQWlEO0lBQy9GLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdDLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNwRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUQsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25ELGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUM5RCxjQUFjLEVBQUUs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QUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJ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U0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQWpSSCxzQkFrUkM7QUFoUkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxvQkFBYyxHQUFHLGNBQWMsQUFBakIsQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogSWYgdHJ1ZSwgdGhlbiB0aGUgaW1hZ2UgaXMgcmVtb3ZlZCBmb3JjaWJseSB3aGVuIHRoZSByZXNvdXJjZSBpcyBkZXN0cm95ZWQuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjZm9yY2VfcmVtb3ZlIEltYWdlI2ZvcmNlX3JlbW92ZX1cbiAgKi9cbiAgcmVhZG9ubHkgZm9yY2VSZW1vdmU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIElmIHRydWUsIHRoZW4gdGhlIERvY2tlciBpbWFnZSB3b24ndCBiZSBkZWxldGVkIG9uIGRlc3Ryb3kgb3BlcmF0aW9uLiBJZiB0aGlzIGlzIGZhbHNlLCBpdCB3aWxsIGRlbGV0ZSB0aGUgaW1hZ2UgZnJvbSB0aGUgZG9ja2VyIGxvY2FsIHN0b3JhZ2Ugb24gZGVzdHJveSBvcGVyYXRpb24uXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2Uja2VlcF9sb2NhbGx5IEltYWdlI2tlZXBfbG9jYWxseX1cbiAgKi9cbiAgcmVhZG9ubHkga2VlcExvY2FsbHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIFRoZSBuYW1lIG9mIHRoZSBEb2NrZXIgaW1hZ2UsIGluY2x1ZGluZyBhbnkgdGFncyBvciBTSEEyNTYgcmVwbyBkaWdlc3RzLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI25hbWUgSW1hZ2UjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgcGxhdGZvcm0gdG8gdXNlIHdoZW4gcHVsbGluZyB0aGUgaW1hZ2UuIERlZmF1bHRzIHRvIHRoZSBwbGF0Zm9ybSBvZiB0aGUgY3VycmVudCBtYWNoaW5lLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI3BsYXRmb3JtIEltYWdlI3BsYXRmb3JtfVxuICAqL1xuICByZWFkb25seSBwbGF0Zm9ybT86IHN0cmluZztcbiAgLyoqXG4gICogTGlzdCBvZiB2YWx1ZXMgd2hpY2ggY2F1c2UgYW4gaW1hZ2UgcHVsbCB3aGVuIGNoYW5nZWQuIFRoaXMgaXMgdXNlZCB0byBzdG9yZSB0aGUgaW1hZ2UgZGlnZXN0IGZyb20gdGhlIHJlZ2lzdHJ5IHdoZW4gdXNpbmcgdGhlIFtkb2NrZXJfcmVnaXN0cnlfaW1hZ2VdKC4uL2RhdGEtc291cmNlcy9yZWdpc3RyeV9pbWFnZS5tZCkuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjcHVsbF90cmlnZ2VycyBJbWFnZSNwdWxsX3RyaWdnZXJzfVxuICAqL1xuICByZWFkb25seSBwdWxsVHJpZ2dlcnM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogQSBtYXAgb2YgYXJiaXRyYXJ5IHN0cmluZ3MgdGhhdCwgd2hlbiBjaGFuZ2VkLCB3aWxsIGZvcmNlIHRoZSBgZG9ja2VyX2ltYWdlYCByZXNvdXJjZSB0byBiZSByZXBsYWNlZC4gVGhpcyBjYW4gYmUgdXNlZCB0byByZWJ1aWxkIGFuIGltYWdlIHdoZW4gY29udGVudHMgb2Ygc291cmNlIGNvZGUgZm9sZGVycyBjaGFuZ2VcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSN0cmlnZ2VycyBJbWFnZSN0cmlnZ2Vyc31cbiAgKi9cbiAgcmVhZG9ubHkgdHJpZ2dlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBidWlsZCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI2J1aWxkIEltYWdlI2J1aWxkfVxuICAqL1xuICByZWFkb25seSBidWlsZEF0dHJpYnV0ZT86IEltYWdlQnVpbGQ7XG4gIC8qKlxuICAqIHRpbWVvdXRzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjdGltZW91dHMgSW1hZ2UjdGltZW91dHN9XG4gICovXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogSW1hZ2VUaW1lb3V0cztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VCdWlsZEF1dGhDb25maWcge1xuICAvKipcbiAgKiB0aGUgYXV0aCB0b2tlblxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI2F1dGggSW1hZ2UjYXV0aH1cbiAgKi9cbiAgcmVhZG9ubHkgYXV0aD86IHN0cmluZztcbiAgLyoqXG4gICogdGhlIHVzZXIgZW1hbFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI2VtYWlsIEltYWdlI2VtYWlsfVxuICAqL1xuICByZWFkb25seSBlbWFpbD86IHN0cmluZztcbiAgLyoqXG4gICogaG9zdG5hbWUgb2YgdGhlIHJlZ2lzdHJ5XG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjaG9zdF9uYW1lIEltYWdlI2hvc3RfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgaG9zdE5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogdGhlIGlkZW50aXR5IHRva2VuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjaWRlbnRpdHlfdG9rZW4gSW1hZ2UjaWRlbnRpdHlfdG9rZW59XG4gICovXG4gIHJlYWRvbmx5IGlkZW50aXR5VG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIHRoZSByZWdpc3RyeSBwYXNzd29yZFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI3Bhc3N3b3JkIEltYWdlI3Bhc3N3b3JkfVxuICAqL1xuICByZWFkb25seSBwYXNzd29yZD86IHN0cmluZztcbiAgLyoqXG4gICogdGhlIHJlZ2lzdHJ5IHRva2VuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjcmVnaXN0cnlfdG9rZW4gSW1hZ2UjcmVnaXN0cnlfdG9rZW59XG4gICovXG4gIHJlYWRvbmx5IHJlZ2lzdHJ5VG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIHRoZSBzZXJ2ZXIgYWRkcmVzc1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI3NlcnZlcl9hZGRyZXNzIEltYWdlI3NlcnZlcl9hZGRyZXNzfVxuICAqL1xuICByZWFkb25seSBzZXJ2ZXJBZGRyZXNzPzogc3RyaW5nO1xuICAvKipcbiAgKiB0aGUgcmVnaXN0cnkgdXNlciBuYW1lXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjdXNlcl9uYW1lIEltYWdlI3VzZXJfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgdXNlck5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZUJ1aWxkQXV0aENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IEltYWdlQnVpbGRBdXRoQ29uZmlnIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXV0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRoKSxcbiAgICBlbWFpbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbWFpbCksXG4gICAgaG9zdF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3ROYW1lKSxcbiAgICBpZGVudGl0eV90b2tlbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZGVudGl0eVRva2VuKSxcbiAgICBwYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXNzd29yZCksXG4gICAgcmVnaXN0cnlfdG9rZW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVnaXN0cnlUb2tlbiksXG4gICAgc2VydmVyX2FkZHJlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmVyQWRkcmVzcyksXG4gICAgdXNlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJOYW1lKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZUJ1aWxkQXV0aENvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEltYWdlQnVpbGRBdXRoQ29uZmlnIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGF1dGg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmF1dGgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbWFpbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaG9zdF9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ob3N0TmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaWRlbnRpdHlfdG9rZW46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlkZW50aXR5VG9rZW4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wYXNzd29yZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcmVnaXN0cnlfdG9rZW46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlZ2lzdHJ5VG9rZW4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNlcnZlcl9hZGRyZXNzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZXJ2ZXJBZGRyZXNzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB1c2VyX25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnVzZXJOYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlQnVpbGRBdXRoQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEltYWdlQnVpbGRBdXRoQ29uZmlnIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF1dGggPSB0aGlzLl9hdXRoO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW1haWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW1haWwgPSB0aGlzLl9lbWFpbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvc3ROYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmhvc3ROYW1lID0gdGhpcy5faG9zdE5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pZGVudGl0eVRva2VuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlkZW50aXR5VG9rZW4gPSB0aGlzLl9pZGVudGl0eVRva2VuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFzc3dvcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFzc3dvcmQgPSB0aGlzLl9wYXNzd29yZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlZ2lzdHJ5VG9rZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVnaXN0cnlUb2tlbiA9IHRoaXMuX3JlZ2lzdHJ5VG9rZW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXJ2ZXJBZGRyZXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlcnZlckFkZHJlc3MgPSB0aGlzLl9zZXJ2ZXJBZGRyZXNzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlck5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlck5hbWUgPSB0aGlzLl91c2VyTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEltYWdlQnVpbGRBdXRoQ29uZmlnIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2F1dGggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbWFpbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hvc3ROYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faWRlbnRpdHlUb2tlbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVnaXN0cnlUb2tlbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlcnZlckFkZHJlc3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91c2VyTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hdXRoID0gdmFsdWUuYXV0aDtcbiAgICAgIHRoaXMuX2VtYWlsID0gdmFsdWUuZW1haWw7XG4gICAgICB0aGlzLl9ob3N0TmFtZSA9IHZhbHVlLmhvc3ROYW1lO1xuICAgICAgdGhpcy5faWRlbnRpdHlUb2tlbiA9IHZhbHVlLmlkZW50aXR5VG9rZW47XG4gICAgICB0aGlzLl9wYXNzd29yZCA9IHZhbHVlLnBhc3N3b3JkO1xuICAgICAgdGhpcy5fcmVnaXN0cnlUb2tlbiA9IHZhbHVlLnJlZ2lzdHJ5VG9rZW47XG4gICAgICB0aGlzLl9zZXJ2ZXJBZGRyZXNzID0gdmFsdWUuc2VydmVyQWRkcmVzcztcbiAgICAgIHRoaXMuX3VzZXJOYW1lID0gdmFsdWUudXNlck5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGgoKSB7XG4gICAgdGhpcy5fYXV0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRoO1xuICB9XG5cbiAgLy8gZW1haWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW1haWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVtYWlsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW1haWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVtYWlsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbWFpbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVtYWlsKCkge1xuICAgIHRoaXMuX2VtYWlsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbWFpbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbDtcbiAgfVxuXG4gIC8vIGhvc3RfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ob3N0TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaG9zdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBob3N0TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0TmFtZTtcbiAgfVxuXG4gIC8vIGlkZW50aXR5X3Rva2VuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkZW50aXR5VG9rZW4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkZW50aXR5VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZGVudGl0eV90b2tlbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWRlbnRpdHlUb2tlbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWRlbnRpdHlUb2tlbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkZW50aXR5VG9rZW4oKSB7XG4gICAgdGhpcy5faWRlbnRpdHlUb2tlbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRlbnRpdHlUb2tlbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZGVudGl0eVRva2VuO1xuICB9XG5cbiAgLy8gcGFzc3dvcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFzc3dvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGFzc3dvcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXNzd29yZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhc3N3b3JkKCkge1xuICAgIHRoaXMuX3Bhc3N3b3JkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXNzd29yZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXNzd29yZDtcbiAgfVxuXG4gIC8vIHJlZ2lzdHJ5X3Rva2VuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlZ2lzdHJ5VG9rZW4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlZ2lzdHJ5VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWdpc3RyeV90b2tlbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVnaXN0cnlUb2tlbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVnaXN0cnlUb2tlbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZ2lzdHJ5VG9rZW4oKSB7XG4gICAgdGhpcy5fcmVnaXN0cnlUb2tlbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVnaXN0cnlUb2tlbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWdpc3RyeVRva2VuO1xuICB9XG5cbiAgLy8gc2VydmVyX2FkZHJlc3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VydmVyQWRkcmVzcz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmVyQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZlcl9hZGRyZXNzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2ZXJBZGRyZXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2ZXJBZGRyZXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VydmVyQWRkcmVzcygpIHtcbiAgICB0aGlzLl9zZXJ2ZXJBZGRyZXNzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2ZXJBZGRyZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZlckFkZHJlc3M7XG4gIH1cblxuICAvLyB1c2VyX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlck5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlck5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VyTmFtZSgpIHtcbiAgICB0aGlzLl91c2VyTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlck5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlck5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlQnVpbGRBdXRoQ29uZmlnTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogSW1hZ2VCdWlsZEF1dGhDb25maWdbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogSW1hZ2VCdWlsZEF1dGhDb25maWdPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgSW1hZ2VCdWlsZEF1dGhDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBJbWFnZUJ1aWxkU2VjcmV0cyB7XG4gIC8qKlxuICAqIEVudmlyb25tZW50IHZhcmlhYmxlIHNvdXJjZSBvZiB0aGUgc2VjcmV0XG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjZW52IEltYWdlI2Vudn1cbiAgKi9cbiAgcmVhZG9ubHkgZW52Pzogc3RyaW5nO1xuICAvKipcbiAgKiBJRCBvZiB0aGUgc2VjcmV0LiBCeSBkZWZhdWx0LCBzZWNyZXRzIGFyZSBtb3VudGVkIHRvIC9ydW4vc2VjcmV0cy88aWQ+XG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjaWQgSW1hZ2UjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgLyoqXG4gICogRmlsZSBzb3VyY2Ugb2YgdGhlIHNlY3JldC4gVGFrZXMgcHJlY2VkZW5jZSBvdmVyIGBlbnZgXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2Ujc3JjIEltYWdlI3NyY31cbiAgKi9cbiAgcmVhZG9ubHkgc3JjPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VCdWlsZFNlY3JldHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBJbWFnZUJ1aWxkU2VjcmV0cyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVudjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbnYpLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgICBzcmM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3JjKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZUJ1aWxkU2VjcmV0c1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEltYWdlQnVpbGRTZWNyZXRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGVudjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW52KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNyYzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3JjKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlQnVpbGRTZWNyZXRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEltYWdlQnVpbGRTZWNyZXRzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbnYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW52ID0gdGhpcy5fZW52O1xuICAgIH1cbiAgICBpZiAodGhpcy5faWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWQgPSB0aGlzLl9pZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NyYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zcmMgPSB0aGlzLl9zcmM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBJbWFnZUJ1aWxkU2VjcmV0cyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbnYgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NyYyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbnYgPSB2YWx1ZS5lbnY7XG4gICAgICB0aGlzLl9pZCA9IHZhbHVlLmlkO1xuICAgICAgdGhpcy5fc3JjID0gdmFsdWUuc3JjO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVudiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbnY/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVudigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VudicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW52KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbnYgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbnYoKSB7XG4gICAgdGhpcy5fZW52ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbnZJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW52O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIHNyYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcmM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNyYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NyYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3JjKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcmMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcmMoKSB7XG4gICAgdGhpcy5fc3JjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcmNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3JjO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUJ1aWxkU2VjcmV0c0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IEltYWdlQnVpbGRTZWNyZXRzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IEltYWdlQnVpbGRTZWNyZXRzT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IEltYWdlQnVpbGRTZWNyZXRzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VCdWlsZFVsaW1pdCB7XG4gIC8qKlxuICAqIHNvZnQgbGltaXRcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNoYXJkIEltYWdlI2hhcmR9XG4gICovXG4gIHJlYWRvbmx5IGhhcmQ6IG51bWJlcjtcbiAgLyoqXG4gICogdHlwZSBvZiB1bGltaXQsIGUuZy4gYG5vZmlsZWBcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNuYW1lIEltYWdlI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogaGFyZCBsaW1pdFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI3NvZnQgSW1hZ2Ujc29mdH1cbiAgKi9cbiAgcmVhZG9ubHkgc29mdDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VCdWlsZFVsaW1pdFRvVGVycmFmb3JtKHN0cnVjdD86IEltYWdlQnVpbGRVbGltaXQgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBoYXJkOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmhhcmQpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgc29mdDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zb2Z0KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZUJ1aWxkVWxpbWl0VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogSW1hZ2VCdWlsZFVsaW1pdCB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBoYXJkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5oYXJkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzb2Z0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zb2Z0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlQnVpbGRVbGltaXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogSW1hZ2VCdWlsZFVsaW1pdCB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faGFyZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5oYXJkID0gdGhpcy5faGFyZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb2Z0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvZnQgPSB0aGlzLl9zb2Z0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogSW1hZ2VCdWlsZFVsaW1pdCB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9oYXJkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NvZnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faGFyZCA9IHZhbHVlLmhhcmQ7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICAgIHRoaXMuX3NvZnQgPSB2YWx1ZS5zb2Z0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGhhcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaGFyZD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaGFyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2hhcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhhcmQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2hhcmQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGFyZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oYXJkO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBzb2Z0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NvZnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHNvZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzb2Z0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzb2Z0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zb2Z0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvZnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc29mdDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VCdWlsZFVsaW1pdExpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IEltYWdlQnVpbGRVbGltaXRbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogSW1hZ2VCdWlsZFVsaW1pdE91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBJbWFnZUJ1aWxkVWxpbWl0T3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VCdWlsZCB7XG4gIC8qKlxuICAqIFBhaXJzIGZvciBidWlsZC10aW1lIHZhcmlhYmxlcyBpbiB0aGUgZm9ybSBvZiBgRU5EUE9JTlQgOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cImBcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNidWlsZF9hcmdzIEltYWdlI2J1aWxkX2FyZ3N9XG4gICovXG4gIHJlYWRvbmx5IGJ1aWxkQXJncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIEJ1aWxkSUQgaXMgYW4gb3B0aW9uYWwgaWRlbnRpZmllciB0aGF0IGNhbiBiZSBwYXNzZWQgdG9nZXRoZXIgd2l0aCB0aGUgYnVpbGQgcmVxdWVzdC4gVGhlIHNhbWUgaWRlbnRpZmllciBjYW4gYmUgdXNlZCB0byBncmFjZWZ1bGx5IGNhbmNlbCB0aGUgYnVpbGQgd2l0aCB0aGUgY2FuY2VsIHJlcXVlc3QuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjYnVpbGRfaWQgSW1hZ2UjYnVpbGRfaWR9XG4gICovXG4gIHJlYWRvbmx5IGJ1aWxkSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFBhdGggdG8gYSBmaWxlIHdoZXJlIHRoZSBidWlsZHggbG9nIGFyZSB3cml0dGVuIHRvLiBPbmx5IGF2YWlsYWJsZSB3aGVuIGBidWlsZGVyYCBpcyBzZXQuIElmIG5vdCBzZXQsIG5vIGxvZ3MgYXJlIGF2YWlsYWJsZS4gVGhlIHBhdGggaXMgdGFrZW4gYXMgaXMsIHNvIG1ha2Ugc3VyZSB0byB1c2UgYSBwYXRoIHRoYXQgaXMgYXZhaWxhYmxlLlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI2J1aWxkX2xvZ19maWxlIEltYWdlI2J1aWxkX2xvZ19maWxlfVxuICAqL1xuICByZWFkb25seSBidWlsZExvZ0ZpbGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFNldCB0aGUgbmFtZSBvZiB0aGUgYnVpbGR4IGJ1aWxkZXIgdG8gdXNlLiBJZiBub3Qgc2V0LCB0aGUgbGVnYWN5IGJ1aWxkZXIgaXMgdXNlZC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNidWlsZGVyIEltYWdlI2J1aWxkZXJ9XG4gICovXG4gIHJlYWRvbmx5IGJ1aWxkZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEltYWdlcyB0byBjb25zaWRlciBhcyBjYWNoZSBzb3VyY2VzXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjY2FjaGVfZnJvbSBJbWFnZSNjYWNoZV9mcm9tfVxuICAqL1xuICByZWFkb25seSBjYWNoZUZyb20/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogT3B0aW9uYWwgcGFyZW50IGNncm91cCBmb3IgdGhlIGNvbnRhaW5lclxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI2Nncm91cF9wYXJlbnQgSW1hZ2UjY2dyb3VwX3BhcmVudH1cbiAgKi9cbiAgcmVhZG9ubHkgY2dyb3VwUGFyZW50Pzogc3RyaW5nO1xuICAvKipcbiAgKiBWYWx1ZSB0byBzcGVjaWZ5IHRoZSBidWlsZCBjb250ZXh0LiBDdXJyZW50bHksIG9ubHkgYSBgUEFUSGAgY29udGV4dCBpcyBzdXBwb3J0ZWQuIFlvdSBjYW4gdXNlIHRoZSBoZWxwZXIgZnVuY3Rpb24gJyR7cGF0aC5jd2R9L2NvbnRleHQtZGlyJy4gVGhpcyBhbHdheXMgcmVmZXJzIHRvIHRoZSBsb2NhbCB3b3JraW5nIGRpcmVjdG9yeSwgZXZlbiB3aGVuIGJ1aWxkaW5nIGltYWdlcyBvbiByZW1vdGUgaG9zdHMuIFBsZWFzZSBzZWUgaHR0cHM6Ly9kb2NzLmRvY2tlci5jb20vYnVpbGQvYnVpbGRpbmcvY29udGV4dC8gZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgYnVpbGQgY29udGV4dHMuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjY29udGV4dCBJbWFnZSNjb250ZXh0fVxuICAqL1xuICByZWFkb25seSBjb250ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBsZW5ndGggb2YgYSBDUFUgcGVyaW9kIGluIG1pY3Jvc2Vjb25kc1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI2NwdV9wZXJpb2QgSW1hZ2UjY3B1X3BlcmlvZH1cbiAgKi9cbiAgcmVhZG9ubHkgY3B1UGVyaW9kPzogbnVtYmVyO1xuICAvKipcbiAgKiBNaWNyb3NlY29uZHMgb2YgQ1BVIHRpbWUgdGhhdCB0aGUgY29udGFpbmVyIGNhbiBnZXQgaW4gYSBDUFUgcGVyaW9kXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjY3B1X3F1b3RhIEltYWdlI2NwdV9xdW90YX1cbiAgKi9cbiAgcmVhZG9ubHkgY3B1UXVvdGE/OiBudW1iZXI7XG4gIC8qKlxuICAqIENQVXMgaW4gd2hpY2ggdG8gYWxsb3cgZXhlY3V0aW9uIChlLmcuLCBgMC0zYCwgYDBgLCBgMWApXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjY3B1X3NldF9jcHVzIEltYWdlI2NwdV9zZXRfY3B1c31cbiAgKi9cbiAgcmVhZG9ubHkgY3B1U2V0Q3B1cz86IHN0cmluZztcbiAgLyoqXG4gICogTUVNcyBpbiB3aGljaCB0byBhbGxvdyBleGVjdXRpb24gKGAwLTNgLCBgMGAsIGAxYClcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNjcHVfc2V0X21lbXMgSW1hZ2UjY3B1X3NldF9tZW1zfVxuICAqL1xuICByZWFkb25seSBjcHVTZXRNZW1zPzogc3RyaW5nO1xuICAvKipcbiAgKiBDUFUgc2hhcmVzIChyZWxhdGl2ZSB3ZWlnaHQpXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjY3B1X3NoYXJlcyBJbWFnZSNjcHVfc2hhcmVzfVxuICAqL1xuICByZWFkb25seSBjcHVTaGFyZXM/OiBudW1iZXI7XG4gIC8qKlxuICAqIE5hbWUgb2YgdGhlIERvY2tlcmZpbGUuIERlZmF1bHRzIHRvIGBEb2NrZXJmaWxlYC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNkb2NrZXJmaWxlIEltYWdlI2RvY2tlcmZpbGV9XG4gICovXG4gIHJlYWRvbmx5IGRvY2tlcmZpbGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEEgbGlzdCBvZiBob3N0bmFtZXMvSVAgbWFwcGluZ3MgdG8gYWRkIHRvIHRoZSBjb250YWluZXLigJlzIC9ldGMvaG9zdHMgZmlsZS4gU3BlY2lmaWVkIGluIHRoZSBmb3JtIFtcImhvc3RuYW1lOklQXCJdXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjZXh0cmFfaG9zdHMgSW1hZ2UjZXh0cmFfaG9zdHN9XG4gICovXG4gIHJlYWRvbmx5IGV4dHJhSG9zdHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogQWx3YXlzIHJlbW92ZSBpbnRlcm1lZGlhdGUgY29udGFpbmVyc1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI2ZvcmNlX3JlbW92ZSBJbWFnZSNmb3JjZV9yZW1vdmV9XG4gICovXG4gIHJlYWRvbmx5IGZvcmNlUmVtb3ZlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBJc29sYXRpb24gcmVwcmVzZW50cyB0aGUgaXNvbGF0aW9uIHRlY2hub2xvZ3kgb2YgYSBjb250YWluZXIuIFRoZSBzdXBwb3J0ZWQgdmFsdWVzIGFyZSBcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNpc29sYXRpb24gSW1hZ2UjaXNvbGF0aW9ufVxuICAqL1xuICByZWFkb25seSBpc29sYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFNldCBtZXRhZGF0YSBmb3IgYW4gaW1hZ2VcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNsYWJlbCBJbWFnZSNsYWJlbH1cbiAgKi9cbiAgcmVhZG9ubHkgbGFiZWw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBVc2VyLWRlZmluZWQga2V5L3ZhbHVlIG1ldGFkYXRhXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjbGFiZWxzIEltYWdlI2xhYmVsc31cbiAgKi9cbiAgcmVhZG9ubHkgbGFiZWxzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogU2V0IG1lbW9yeSBsaW1pdCBmb3IgYnVpbGRcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNtZW1vcnkgSW1hZ2UjbWVtb3J5fVxuICAqL1xuICByZWFkb25seSBtZW1vcnk/OiBudW1iZXI7XG4gIC8qKlxuICAqIFRvdGFsIG1lbW9yeSAobWVtb3J5ICsgc3dhcCksIC0xIHRvIGVuYWJsZSB1bmxpbWl0ZWQgc3dhcFxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI21lbW9yeV9zd2FwIEltYWdlI21lbW9yeV9zd2FwfVxuICAqL1xuICByZWFkb25seSBtZW1vcnlTd2FwPzogbnVtYmVyO1xuICAvKipcbiAgKiBTZXQgdGhlIG5ldHdvcmtpbmcgbW9kZSBmb3IgdGhlIFJVTiBpbnN0cnVjdGlvbnMgZHVyaW5nIGJ1aWxkXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjbmV0d29ya19tb2RlIEltYWdlI25ldHdvcmtfbW9kZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmV0d29ya01vZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvIG5vdCB1c2UgdGhlIGNhY2hlIHdoZW4gYnVpbGRpbmcgdGhlIGltYWdlXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2Ujbm9fY2FjaGUgSW1hZ2Ujbm9fY2FjaGV9XG4gICovXG4gIHJlYWRvbmx5IG5vQ2FjaGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIFNldCB0aGUgdGFyZ2V0IHBsYXRmb3JtIGZvciB0aGUgYnVpbGQuIERlZmF1bHRzIHRvIGBHT09TL0dPQVJDSGAuIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSB0aGUgW2RvY2tlciBkb2N1bWVudGF0aW9uXShodHRwczovL2dpdGh1Yi5jb20vZG9ja2VyL2J1aWxkeC9ibG9iL21hc3Rlci9kb2NzL3JlZmVyZW5jZS9idWlsZHgubWQjLXNldC10aGUtdGFyZ2V0LXBsYXRmb3Jtcy1mb3ItdGhlLWJ1aWxkLS0tcGxhdGZvcm0pXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjcGxhdGZvcm0gSW1hZ2UjcGxhdGZvcm19XG4gICovXG4gIHJlYWRvbmx5IHBsYXRmb3JtPzogc3RyaW5nO1xuICAvKipcbiAgKiBBdHRlbXB0IHRvIHB1bGwgdGhlIGltYWdlIGV2ZW4gaWYgYW4gb2xkZXIgaW1hZ2UgZXhpc3RzIGxvY2FsbHlcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNwdWxsX3BhcmVudCBJbWFnZSNwdWxsX3BhcmVudH1cbiAgKi9cbiAgcmVhZG9ubHkgcHVsbFBhcmVudD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogQSBHaXQgcmVwb3NpdG9yeSBVUkkgb3IgSFRUUC9IVFRQUyBjb250ZXh0IFVSSS4gV2lsbCBiZSBpZ25vcmVkIGlmIGBidWlsZGVyYCBpcyBzZXQuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjcmVtb3RlX2NvbnRleHQgSW1hZ2UjcmVtb3RlX2NvbnRleHR9XG4gICovXG4gIHJlYWRvbmx5IHJlbW90ZUNvbnRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFJlbW92ZSBpbnRlcm1lZGlhdGUgY29udGFpbmVycyBhZnRlciBhIHN1Y2Nlc3NmdWwgYnVpbGQuIERlZmF1bHRzIHRvIGB0cnVlYC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNyZW1vdmUgSW1hZ2UjcmVtb3ZlfVxuICAqL1xuICByZWFkb25seSByZW1vdmU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIFRoZSBzZWN1cml0eSBvcHRpb25zXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2Ujc2VjdXJpdHlfb3B0IEltYWdlI3NlY3VyaXR5X29wdH1cbiAgKi9cbiAgcmVhZG9ubHkgc2VjdXJpdHlPcHQ/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogU2V0IGFuIElEIGZvciB0aGUgYnVpbGQgc2Vzc2lvblxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI3Nlc3Npb25faWQgSW1hZ2Ujc2Vzc2lvbl9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgc2Vzc2lvbklkPzogc3RyaW5nO1xuICAvKipcbiAgKiBTaXplIG9mIC9kZXYvc2htIGluIGJ5dGVzLiBUaGUgc2l6ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2Ujc2htX3NpemUgSW1hZ2Ujc2htX3NpemV9XG4gICovXG4gIHJlYWRvbmx5IHNobVNpemU/OiBudW1iZXI7XG4gIC8qKlxuICAqIElmIHRydWUgdGhlIG5ldyBsYXllcnMgYXJlIHNxdWFzaGVkIGludG8gYSBuZXcgaW1hZ2Ugd2l0aCBhIHNpbmdsZSBuZXcgbGF5ZXJcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNzcXVhc2ggSW1hZ2Ujc3F1YXNofVxuICAqL1xuICByZWFkb25seSBzcXVhc2g/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIFN1cHByZXNzIHRoZSBidWlsZCBvdXRwdXQgYW5kIHByaW50IGltYWdlIElEIG9uIHN1Y2Nlc3NcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNzdXBwcmVzc19vdXRwdXQgSW1hZ2Ujc3VwcHJlc3Nfb3V0cHV0fVxuICAqL1xuICByZWFkb25seSBzdXBwcmVzc091dHB1dD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogTmFtZSBhbmQgb3B0aW9uYWxseSBhIHRhZyBpbiB0aGUgJ25hbWU6dGFnJyBmb3JtYXRcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSN0YWcgSW1hZ2UjdGFnfVxuICAqL1xuICByZWFkb25seSB0YWc/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogU2V0IHRoZSB0YXJnZXQgYnVpbGQgc3RhZ2UgdG8gYnVpbGRcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSN0YXJnZXQgSW1hZ2UjdGFyZ2V0fVxuICAqL1xuICByZWFkb25seSB0YXJnZXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFZlcnNpb24gb2YgdGhlIHVuZGVybHlpbmcgYnVpbGRlciB0byB1c2VcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSN2ZXJzaW9uIEltYWdlI3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IHZlcnNpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGF1dGhfY29uZmlnIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UjYXV0aF9jb25maWcgSW1hZ2UjYXV0aF9jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IGF1dGhDb25maWc/OiBJbWFnZUJ1aWxkQXV0aENvbmZpZ1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHNlY3JldHMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNzZWNyZXRzIEltYWdlI3NlY3JldHN9XG4gICovXG4gIHJlYWRvbmx5IHNlY3JldHM/OiBJbWFnZUJ1aWxkU2VjcmV0c1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHVsaW1pdCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI3VsaW1pdCBJbWFnZSN1bGltaXR9XG4gICovXG4gIHJlYWRvbmx5IHVsaW1pdD86IEltYWdlQnVpbGRVbGltaXRbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VCdWlsZFRvVGVycmFmb3JtKHN0cnVjdD86IEltYWdlQnVpbGRPdXRwdXRSZWZlcmVuY2UgfCBJbWFnZUJ1aWxkKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJ1aWxkX2FyZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYnVpbGRBcmdzKSxcbiAgICBidWlsZF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWlsZElkKSxcbiAgICBidWlsZF9sb2dfZmlsZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWlsZExvZ0ZpbGUpLFxuICAgIGJ1aWxkZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVpbGRlciksXG4gICAgY2FjaGVfZnJvbTogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuY2FjaGVGcm9tKSxcbiAgICBjZ3JvdXBfcGFyZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNncm91cFBhcmVudCksXG4gICAgY29udGV4dDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZXh0KSxcbiAgICBjcHVfcGVyaW9kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmNwdVBlcmlvZCksXG4gICAgY3B1X3F1b3RhOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmNwdVF1b3RhKSxcbiAgICBjcHVfc2V0X2NwdXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3B1U2V0Q3B1cyksXG4gICAgY3B1X3NldF9tZW1zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNwdVNldE1lbXMpLFxuICAgIGNwdV9zaGFyZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY3B1U2hhcmVzKSxcbiAgICBkb2NrZXJmaWxlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvY2tlcmZpbGUpLFxuICAgIGV4dHJhX2hvc3RzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5leHRyYUhvc3RzKSxcbiAgICBmb3JjZV9yZW1vdmU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmZvcmNlUmVtb3ZlKSxcbiAgICBpc29sYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaXNvbGF0aW9uKSxcbiAgICBsYWJlbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5sYWJlbCksXG4gICAgbGFiZWxzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmxhYmVscyksXG4gICAgbWVtb3J5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lbW9yeSksXG4gICAgbWVtb3J5X3N3YXA6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWVtb3J5U3dhcCksXG4gICAgbmV0d29ya19tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ldHdvcmtNb2RlKSxcbiAgICBub19jYWNoZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEubm9DYWNoZSksXG4gICAgcGxhdGZvcm06IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGxhdGZvcm0pLFxuICAgIHB1bGxfcGFyZW50OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5wdWxsUGFyZW50KSxcbiAgICByZW1vdGVfY29udGV4dDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZW1vdGVDb250ZXh0KSxcbiAgICByZW1vdmU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlbW92ZSksXG4gICAgc2VjdXJpdHlfb3B0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5zZWN1cml0eU9wdCksXG4gICAgc2Vzc2lvbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXNzaW9uSWQpLFxuICAgIHNobV9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNobVNpemUpLFxuICAgIHNxdWFzaDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc3F1YXNoKSxcbiAgICBzdXBwcmVzc19vdXRwdXQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnN1cHByZXNzT3V0cHV0KSxcbiAgICB0YWc6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnRhZyksXG4gICAgdGFyZ2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldCksXG4gICAgdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52ZXJzaW9uKSxcbiAgICBhdXRoX2NvbmZpZzogY2RrdGYubGlzdE1hcHBlcihpbWFnZUJ1aWxkQXV0aENvbmZpZ1RvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmF1dGhDb25maWcpLFxuICAgIHNlY3JldHM6IGNka3RmLmxpc3RNYXBwZXIoaW1hZ2VCdWlsZFNlY3JldHNUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5zZWNyZXRzKSxcbiAgICB1bGltaXQ6IGNka3RmLmxpc3RNYXBwZXIoaW1hZ2VCdWlsZFVsaW1pdFRvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnVsaW1pdCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VCdWlsZFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEltYWdlQnVpbGRPdXRwdXRSZWZlcmVuY2UgfCBJbWFnZUJ1aWxkKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBidWlsZF9hcmdzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkoc3RydWN0IS5idWlsZEFyZ3MpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICB9LFxuICAgIGJ1aWxkX2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5idWlsZElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBidWlsZF9sb2dfZmlsZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYnVpbGRMb2dGaWxlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBidWlsZGVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5idWlsZGVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjYWNoZV9mcm9tOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuY2FjaGVGcm9tKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIGNncm91cF9wYXJlbnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNncm91cFBhcmVudCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY29udGV4dDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29udGV4dCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY3B1X3BlcmlvZDoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3B1UGVyaW9kKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBjcHVfcXVvdGE6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNwdVF1b3RhKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBjcHVfc2V0X2NwdXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNwdVNldENwdXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNwdV9zZXRfbWVtczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3B1U2V0TWVtcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY3B1X3NoYXJlczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3B1U2hhcmVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBkb2NrZXJmaWxlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kb2NrZXJmaWxlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBleHRyYV9ob3N0czoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmV4dHJhSG9zdHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgZm9yY2VfcmVtb3ZlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZm9yY2VSZW1vdmUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBpc29sYXRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlzb2xhdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKShzdHJ1Y3QhLmxhYmVsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgfSxcbiAgICBsYWJlbHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKShzdHJ1Y3QhLmxhYmVscyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgIH0sXG4gICAgbWVtb3J5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tZW1vcnkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIG1lbW9yeV9zd2FwOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tZW1vcnlTd2FwKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBuZXR3b3JrX21vZGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5ldHdvcmtNb2RlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBub19jYWNoZToge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5vQ2FjaGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBwbGF0Zm9ybToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucGxhdGZvcm0pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHB1bGxfcGFyZW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucHVsbFBhcmVudCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIHJlbW90ZV9jb250ZXh0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZW1vdGVDb250ZXh0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByZW1vdmU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZW1vdmUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBzZWN1cml0eV9vcHQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5zZWN1cml0eU9wdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICBzZXNzaW9uX2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZXNzaW9uSWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNobV9zaXplOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zaG1TaXplKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBzcXVhc2g6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zcXVhc2gpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBzdXBwcmVzc19vdXRwdXQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdXBwcmVzc091dHB1dCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnRhZyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICB0YXJnZXQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdmVyc2lvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXV0aF9jb25maWc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGltYWdlQnVpbGRBdXRoQ29uZmlnVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuYXV0aENvbmZpZyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkltYWdlQnVpbGRBdXRoQ29uZmlnTGlzdFwiLFxuICAgIH0sXG4gICAgc2VjcmV0czoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woaW1hZ2VCdWlsZFNlY3JldHNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5zZWNyZXRzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiSW1hZ2VCdWlsZFNlY3JldHNMaXN0XCIsXG4gICAgfSxcbiAgICB1bGltaXQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGltYWdlQnVpbGRVbGltaXRUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS51bGltaXQpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJJbWFnZUJ1aWxkVWxpbWl0TGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUJ1aWxkT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBJbWFnZUJ1aWxkIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9idWlsZEFyZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVpbGRBcmdzID0gdGhpcy5fYnVpbGRBcmdzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYnVpbGRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWlsZElkID0gdGhpcy5fYnVpbGRJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2J1aWxkTG9nRmlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWlsZExvZ0ZpbGUgPSB0aGlzLl9idWlsZExvZ0ZpbGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9idWlsZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1aWxkZXIgPSB0aGlzLl9idWlsZGVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2FjaGVGcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhY2hlRnJvbSA9IHRoaXMuX2NhY2hlRnJvbTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Nncm91cFBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jZ3JvdXBQYXJlbnQgPSB0aGlzLl9jZ3JvdXBQYXJlbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbnRleHQgPSB0aGlzLl9jb250ZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3B1UGVyaW9kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNwdVBlcmlvZCA9IHRoaXMuX2NwdVBlcmlvZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NwdVF1b3RhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNwdVF1b3RhID0gdGhpcy5fY3B1UXVvdGE7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jcHVTZXRDcHVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNwdVNldENwdXMgPSB0aGlzLl9jcHVTZXRDcHVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3B1U2V0TWVtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcHVTZXRNZW1zID0gdGhpcy5fY3B1U2V0TWVtcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NwdVNoYXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcHVTaGFyZXMgPSB0aGlzLl9jcHVTaGFyZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kb2NrZXJmaWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRvY2tlcmZpbGUgPSB0aGlzLl9kb2NrZXJmaWxlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZXh0cmFIb3N0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leHRyYUhvc3RzID0gdGhpcy5fZXh0cmFIb3N0cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZvcmNlUmVtb3ZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZvcmNlUmVtb3ZlID0gdGhpcy5fZm9yY2VSZW1vdmU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pc29sYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaXNvbGF0aW9uID0gdGhpcy5faXNvbGF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFiZWwgPSB0aGlzLl9sYWJlbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xhYmVscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYWJlbHMgPSB0aGlzLl9sYWJlbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tZW1vcnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWVtb3J5ID0gdGhpcy5fbWVtb3J5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWVtb3J5U3dhcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZW1vcnlTd2FwID0gdGhpcy5fbWVtb3J5U3dhcDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25ldHdvcmtNb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5ldHdvcmtNb2RlID0gdGhpcy5fbmV0d29ya01vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ub0NhY2hlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5vQ2FjaGUgPSB0aGlzLl9ub0NhY2hlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGxhdGZvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGxhdGZvcm0gPSB0aGlzLl9wbGF0Zm9ybTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3B1bGxQYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHVsbFBhcmVudCA9IHRoaXMuX3B1bGxQYXJlbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZW1vdGVDb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlbW90ZUNvbnRleHQgPSB0aGlzLl9yZW1vdGVDb250ZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVtb3ZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlbW92ZSA9IHRoaXMuX3JlbW92ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlY3VyaXR5T3B0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlY3VyaXR5T3B0ID0gdGhpcy5fc2VjdXJpdHlPcHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXNzaW9uSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2Vzc2lvbklkID0gdGhpcy5fc2Vzc2lvbklkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2htU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zaG1TaXplID0gdGhpcy5fc2htU2l6ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NxdWFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zcXVhc2ggPSB0aGlzLl9zcXVhc2g7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdXBwcmVzc091dHB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdXBwcmVzc091dHB1dCA9IHRoaXMuX3N1cHByZXNzT3V0cHV0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhZyA9IHRoaXMuX3RhZztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXJnZXQgPSB0aGlzLl90YXJnZXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl92ZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZlcnNpb24gPSB0aGlzLl92ZXJzaW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXV0aENvbmZpZz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRoQ29uZmlnID0gdGhpcy5fYXV0aENvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlY3JldHM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2VjcmV0cyA9IHRoaXMuX3NlY3JldHM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91bGltaXQ/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudWxpbWl0ID0gdGhpcy5fdWxpbWl0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogSW1hZ2VCdWlsZCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1aWxkQXJncyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2J1aWxkSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9idWlsZExvZ0ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9idWlsZGVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2FjaGVGcm9tID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2dyb3VwUGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29udGV4dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NwdVBlcmlvZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NwdVF1b3RhID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3B1U2V0Q3B1cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NwdVNldE1lbXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jcHVTaGFyZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kb2NrZXJmaWxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZXh0cmFIb3N0cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZvcmNlUmVtb3ZlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faXNvbGF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sYWJlbHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZW1vcnkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZW1vcnlTd2FwID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmV0d29ya01vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ub0NhY2hlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGxhdGZvcm0gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wdWxsUGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVtb3RlQ29udGV4dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlbW92ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlY3VyaXR5T3B0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2Vzc2lvbklkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2htU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NxdWFzaCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N1cHByZXNzT3V0cHV0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFnID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2F1dGhDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlY3JldHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VsaW1pdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9idWlsZEFyZ3MgPSB2YWx1ZS5idWlsZEFyZ3M7XG4gICAgICB0aGlzLl9idWlsZElkID0gdmFsdWUuYnVpbGRJZDtcbiAgICAgIHRoaXMuX2J1aWxkTG9nRmlsZSA9IHZhbHVlLmJ1aWxkTG9nRmlsZTtcbiAgICAgIHRoaXMuX2J1aWxkZXIgPSB2YWx1ZS5idWlsZGVyO1xuICAgICAgdGhpcy5fY2FjaGVGcm9tID0gdmFsdWUuY2FjaGVGcm9tO1xuICAgICAgdGhpcy5fY2dyb3VwUGFyZW50ID0gdmFsdWUuY2dyb3VwUGFyZW50O1xuICAgICAgdGhpcy5fY29udGV4dCA9IHZhbHVlLmNvbnRleHQ7XG4gICAgICB0aGlzLl9jcHVQZXJpb2QgPSB2YWx1ZS5jcHVQZXJpb2Q7XG4gICAgICB0aGlzLl9jcHVRdW90YSA9IHZhbHVlLmNwdVF1b3RhO1xuICAgICAgdGhpcy5fY3B1U2V0Q3B1cyA9IHZhbHVlLmNwdVNldENwdXM7XG4gICAgICB0aGlzLl9jcHVTZXRNZW1zID0gdmFsdWUuY3B1U2V0TWVtcztcbiAgICAgIHRoaXMuX2NwdVNoYXJlcyA9IHZhbHVlLmNwdVNoYXJlcztcbiAgICAgIHRoaXMuX2RvY2tlcmZpbGUgPSB2YWx1ZS5kb2NrZXJmaWxlO1xuICAgICAgdGhpcy5fZXh0cmFIb3N0cyA9IHZhbHVlLmV4dHJhSG9zdHM7XG4gICAgICB0aGlzLl9mb3JjZVJlbW92ZSA9IHZhbHVlLmZvcmNlUmVtb3ZlO1xuICAgICAgdGhpcy5faXNvbGF0aW9uID0gdmFsdWUuaXNvbGF0aW9uO1xuICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZS5sYWJlbDtcbiAgICAgIHRoaXMuX2xhYmVscyA9IHZhbHVlLmxhYmVscztcbiAgICAgIHRoaXMuX21lbW9yeSA9IHZhbHVlLm1lbW9yeTtcbiAgICAgIHRoaXMuX21lbW9yeVN3YXAgPSB2YWx1ZS5tZW1vcnlTd2FwO1xuICAgICAgdGhpcy5fbmV0d29ya01vZGUgPSB2YWx1ZS5uZXR3b3JrTW9kZTtcbiAgICAgIHRoaXMuX25vQ2FjaGUgPSB2YWx1ZS5ub0NhY2hlO1xuICAgICAgdGhpcy5fcGxhdGZvcm0gPSB2YWx1ZS5wbGF0Zm9ybTtcbiAgICAgIHRoaXMuX3B1bGxQYXJlbnQgPSB2YWx1ZS5wdWxsUGFyZW50O1xuICAgICAgdGhpcy5fcmVtb3RlQ29udGV4dCA9IHZhbHVlLnJlbW90ZUNvbnRleHQ7XG4gICAgICB0aGlzLl9yZW1vdmUgPSB2YWx1ZS5yZW1vdmU7XG4gICAgICB0aGlzLl9zZWN1cml0eU9wdCA9IHZhbHVlLnNlY3VyaXR5T3B0O1xuICAgICAgdGhpcy5fc2Vzc2lvbklkID0gdmFsdWUuc2Vzc2lvbklkO1xuICAgICAgdGhpcy5fc2htU2l6ZSA9IHZhbHVlLnNobVNpemU7XG4gICAgICB0aGlzLl9zcXVhc2ggPSB2YWx1ZS5zcXVhc2g7XG4gICAgICB0aGlzLl9zdXBwcmVzc091dHB1dCA9IHZhbHVlLnN1cHByZXNzT3V0cHV0O1xuICAgICAgdGhpcy5fdGFnID0gdmFsdWUudGFnO1xuICAgICAgdGhpcy5fdGFyZ2V0ID0gdmFsdWUudGFyZ2V0O1xuICAgICAgdGhpcy5fdmVyc2lvbiA9IHZhbHVlLnZlcnNpb247XG4gICAgICB0aGlzLl9hdXRoQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hdXRoQ29uZmlnO1xuICAgICAgdGhpcy5fc2VjcmV0cy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2VjcmV0cztcbiAgICAgIHRoaXMuX3VsaW1pdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUudWxpbWl0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGJ1aWxkX2FyZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVpbGRBcmdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgYnVpbGRBcmdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgnYnVpbGRfYXJncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVpbGRBcmdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fYnVpbGRBcmdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVpbGRBcmdzKCkge1xuICAgIHRoaXMuX2J1aWxkQXJncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVpbGRBcmdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkQXJncztcbiAgfVxuXG4gIC8vIGJ1aWxkX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1aWxkSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1aWxkSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWlsZF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVpbGRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVpbGRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1aWxkSWQoKSB7XG4gICAgdGhpcy5fYnVpbGRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVpbGRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZElkO1xuICB9XG5cbiAgLy8gYnVpbGRfbG9nX2ZpbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVpbGRMb2dGaWxlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWlsZExvZ0ZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWlsZF9sb2dfZmlsZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVpbGRMb2dGaWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWlsZExvZ0ZpbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWlsZExvZ0ZpbGUoKSB7XG4gICAgdGhpcy5fYnVpbGRMb2dGaWxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWlsZExvZ0ZpbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRMb2dGaWxlO1xuICB9XG5cbiAgLy8gYnVpbGRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWlsZGVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWlsZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVpbGRlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVpbGRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVpbGRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1aWxkZXIoKSB7XG4gICAgdGhpcy5fYnVpbGRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVpbGRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZGVyO1xuICB9XG5cbiAgLy8gY2FjaGVfZnJvbSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYWNoZUZyb20/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY2FjaGVGcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2NhY2hlX2Zyb20nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhY2hlRnJvbSh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jYWNoZUZyb20gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYWNoZUZyb20oKSB7XG4gICAgdGhpcy5fY2FjaGVGcm9tID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYWNoZUZyb21JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVGcm9tO1xuICB9XG5cbiAgLy8gY2dyb3VwX3BhcmVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZ3JvdXBQYXJlbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNncm91cFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nncm91cF9wYXJlbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNncm91cFBhcmVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2dyb3VwUGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2dyb3VwUGFyZW50KCkge1xuICAgIHRoaXMuX2Nncm91cFBhcmVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2dyb3VwUGFyZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nncm91cFBhcmVudDtcbiAgfVxuXG4gIC8vIGNvbnRleHQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29udGV4dD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRleHQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRleHQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGV4dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xuICB9XG5cbiAgLy8gY3B1X3BlcmlvZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcHVQZXJpb2Q/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGNwdVBlcmlvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2NwdV9wZXJpb2QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNwdVBlcmlvZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY3B1UGVyaW9kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3B1UGVyaW9kKCkge1xuICAgIHRoaXMuX2NwdVBlcmlvZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3B1UGVyaW9kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NwdVBlcmlvZDtcbiAgfVxuXG4gIC8vIGNwdV9xdW90YSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcHVRdW90YT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgY3B1UXVvdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjcHVfcXVvdGEnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNwdVF1b3RhKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jcHVRdW90YSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENwdVF1b3RhKCkge1xuICAgIHRoaXMuX2NwdVF1b3RhID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcHVRdW90YUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcHVRdW90YTtcbiAgfVxuXG4gIC8vIGNwdV9zZXRfY3B1cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcHVTZXRDcHVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcHVTZXRDcHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3B1X3NldF9jcHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjcHVTZXRDcHVzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcHVTZXRDcHVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3B1U2V0Q3B1cygpIHtcbiAgICB0aGlzLl9jcHVTZXRDcHVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcHVTZXRDcHVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NwdVNldENwdXM7XG4gIH1cblxuICAvLyBjcHVfc2V0X21lbXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3B1U2V0TWVtcz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3B1U2V0TWVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NwdV9zZXRfbWVtcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3B1U2V0TWVtcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3B1U2V0TWVtcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENwdVNldE1lbXMoKSB7XG4gICAgdGhpcy5fY3B1U2V0TWVtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3B1U2V0TWVtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcHVTZXRNZW1zO1xuICB9XG5cbiAgLy8gY3B1X3NoYXJlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcHVTaGFyZXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGNwdVNoYXJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2NwdV9zaGFyZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNwdVNoYXJlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY3B1U2hhcmVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3B1U2hhcmVzKCkge1xuICAgIHRoaXMuX2NwdVNoYXJlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3B1U2hhcmVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NwdVNoYXJlcztcbiAgfVxuXG4gIC8vIGRvY2tlcmZpbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZG9ja2VyZmlsZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZG9ja2VyZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvY2tlcmZpbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRvY2tlcmZpbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvY2tlcmZpbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREb2NrZXJmaWxlKCkge1xuICAgIHRoaXMuX2RvY2tlcmZpbGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRvY2tlcmZpbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9ja2VyZmlsZTtcbiAgfVxuXG4gIC8vIGV4dHJhX2hvc3RzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4dHJhSG9zdHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZXh0cmFIb3N0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdleHRyYV9ob3N0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXh0cmFIb3N0cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9leHRyYUhvc3RzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXh0cmFIb3N0cygpIHtcbiAgICB0aGlzLl9leHRyYUhvc3RzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleHRyYUhvc3RzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dHJhSG9zdHM7XG4gIH1cblxuICAvLyBmb3JjZV9yZW1vdmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZm9yY2VSZW1vdmU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGZvcmNlUmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2ZvcmNlX3JlbW92ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZm9yY2VSZW1vdmUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2ZvcmNlUmVtb3ZlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Rm9yY2VSZW1vdmUoKSB7XG4gICAgdGhpcy5fZm9yY2VSZW1vdmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZvcmNlUmVtb3ZlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmNlUmVtb3ZlO1xuICB9XG5cbiAgLy8gaXNvbGF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lzb2xhdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaXNvbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXNvbGF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBpc29sYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lzb2xhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElzb2xhdGlvbigpIHtcbiAgICB0aGlzLl9pc29sYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlzb2xhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pc29sYXRpb247XG4gIH1cblxuICAvLyBsYWJlbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYWJlbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IGxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgnbGFiZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhYmVsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYWJlbCgpIHtcbiAgICB0aGlzLl9sYWJlbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGFiZWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gIH1cblxuICAvLyBsYWJlbHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGFiZWxzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgbGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgnbGFiZWxzJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYWJlbHModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl9sYWJlbHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYWJlbHMoKSB7XG4gICAgdGhpcy5fbGFiZWxzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYWJlbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWxzO1xuICB9XG5cbiAgLy8gbWVtb3J5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21lbW9yeT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWVtb3J5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWVtb3J5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtZW1vcnkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21lbW9yeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1lbW9yeSgpIHtcbiAgICB0aGlzLl9tZW1vcnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lbW9yeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZW1vcnk7XG4gIH1cblxuICAvLyBtZW1vcnlfc3dhcCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZW1vcnlTd2FwPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtZW1vcnlTd2FwKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWVtb3J5X3N3YXAnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lbW9yeVN3YXAodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21lbW9yeVN3YXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZW1vcnlTd2FwKCkge1xuICAgIHRoaXMuX21lbW9yeVN3YXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lbW9yeVN3YXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVtb3J5U3dhcDtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uZXR3b3JrTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmV0d29ya01vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXR3b3JrX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5ldHdvcmtNb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uZXR3b3JrTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5ldHdvcmtNb2RlKCkge1xuICAgIHRoaXMuX25ldHdvcmtNb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuZXR3b3JrTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uZXR3b3JrTW9kZTtcbiAgfVxuXG4gIC8vIG5vX2NhY2hlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vQ2FjaGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IG5vQ2FjaGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbm9fY2FjaGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5vQ2FjaGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX25vQ2FjaGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb0NhY2hlKCkge1xuICAgIHRoaXMuX25vQ2FjaGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vQ2FjaGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9DYWNoZTtcbiAgfVxuXG4gIC8vIHBsYXRmb3JtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BsYXRmb3JtPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwbGF0Zm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsYXRmb3JtJyk7XG4gIH1cbiAgcHVibGljIHNldCBwbGF0Zm9ybSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhdGZvcm0gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQbGF0Zm9ybSgpIHtcbiAgICB0aGlzLl9wbGF0Zm9ybSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm1JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhdGZvcm07XG4gIH1cblxuICAvLyBwdWxsX3BhcmVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wdWxsUGFyZW50PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBwdWxsUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3B1bGxfcGFyZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwdWxsUGFyZW50KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9wdWxsUGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHVsbFBhcmVudCgpIHtcbiAgICB0aGlzLl9wdWxsUGFyZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwdWxsUGFyZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1bGxQYXJlbnQ7XG4gIH1cblxuICAvLyByZW1vdGVfY29udGV4dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZW1vdGVDb250ZXh0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZW1vdGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVtb3RlX2NvbnRleHQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlbW90ZUNvbnRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlbW90ZUNvbnRleHQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZW1vdGVDb250ZXh0KCkge1xuICAgIHRoaXMuX3JlbW90ZUNvbnRleHQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlbW90ZUNvbnRleHRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3RlQ29udGV4dDtcbiAgfVxuXG4gIC8vIHJlbW92ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZW1vdmU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZW1vdmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlbW92ZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVtb3ZlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVtb3ZlKCkge1xuICAgIHRoaXMuX3JlbW92ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVtb3ZlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZTtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X29wdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWN1cml0eU9wdD86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzZWN1cml0eU9wdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9vcHQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY3VyaXR5T3B0KHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NlY3VyaXR5T3B0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VjdXJpdHlPcHQoKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlPcHQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5T3B0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5T3B0O1xuICB9XG5cbiAgLy8gc2Vzc2lvbl9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXNzaW9uSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlc3Npb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Nlc3Npb25faWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlc3Npb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2Vzc2lvbklkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2Vzc2lvbklkKCkge1xuICAgIHRoaXMuX3Nlc3Npb25JZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2Vzc2lvbklkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25JZDtcbiAgfVxuXG4gIC8vIHNobV9zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NobVNpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHNobVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzaG1fc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2htU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2htU2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNobVNpemUoKSB7XG4gICAgdGhpcy5fc2htU2l6ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2htU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaG1TaXplO1xuICB9XG5cbiAgLy8gc3F1YXNoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NxdWFzaD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc3F1YXNoKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3NxdWFzaCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3F1YXNoKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zcXVhc2ggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcXVhc2goKSB7XG4gICAgdGhpcy5fc3F1YXNoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcXVhc2hJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3F1YXNoO1xuICB9XG5cbiAgLy8gc3VwcHJlc3Nfb3V0cHV0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1cHByZXNzT3V0cHV0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBzdXBwcmVzc091dHB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdXBwcmVzc19vdXRwdXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1cHByZXNzT3V0cHV0KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdXBwcmVzc091dHB1dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1cHByZXNzT3V0cHV0KCkge1xuICAgIHRoaXMuX3N1cHByZXNzT3V0cHV0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdXBwcmVzc091dHB1dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwcmVzc091dHB1dDtcbiAgfVxuXG4gIC8vIHRhZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWc/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdGFnKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3RhZycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3RhZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZygpIHtcbiAgICB0aGlzLl90YWcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWc7XG4gIH1cblxuICAvLyB0YXJnZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFyZ2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXJnZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGFyZ2V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFyZ2V0KCkge1xuICAgIHRoaXMuX3RhcmdldCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWZXJzaW9uKCkge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxuXG4gIC8vIGF1dGhfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dGhDb25maWcgPSBuZXcgSW1hZ2VCdWlsZEF1dGhDb25maWdMaXN0KHRoaXMsIFwiYXV0aF9jb25maWdcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IGF1dGhDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dEF1dGhDb25maWcodmFsdWU6IEltYWdlQnVpbGRBdXRoQ29uZmlnW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2F1dGhDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhDb25maWcoKSB7XG4gICAgdGhpcy5fYXV0aENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRoQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNlY3JldHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjcmV0cyA9IG5ldyBJbWFnZUJ1aWxkU2VjcmV0c0xpc3QodGhpcywgXCJzZWNyZXRzXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCBzZWNyZXRzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWNyZXRzO1xuICB9XG4gIHB1YmxpYyBwdXRTZWNyZXRzKHZhbHVlOiBJbWFnZUJ1aWxkU2VjcmV0c1tdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zZWNyZXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWNyZXRzKCkge1xuICAgIHRoaXMuX3NlY3JldHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjcmV0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWNyZXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB1bGltaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdWxpbWl0ID0gbmV3IEltYWdlQnVpbGRVbGltaXRMaXN0KHRoaXMsIFwidWxpbWl0XCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCB1bGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VsaW1pdDtcbiAgfVxuICBwdWJsaWMgcHV0VWxpbWl0KHZhbHVlOiBJbWFnZUJ1aWxkVWxpbWl0W10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3VsaW1pdC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VWxpbWl0KCkge1xuICAgIHRoaXMuX3VsaW1pdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1bGltaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdWxpbWl0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VUaW1lb3V0cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNjcmVhdGUgSW1hZ2UjY3JlYXRlfVxuICAqL1xuICByZWFkb25seSBjcmVhdGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSNkZWxldGUgSW1hZ2UjZGVsZXRlfVxuICAqL1xuICByZWFkb25seSBkZWxldGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzL3Jlc291cmNlcy9pbWFnZSN1cGRhdGUgSW1hZ2UjdXBkYXRlfVxuICAqL1xuICByZWFkb25seSB1cGRhdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZVRpbWVvdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogSW1hZ2VUaW1lb3V0cyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGUpLFxuICAgIGRlbGV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICAgIHVwZGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cGRhdGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlVGltZW91dHNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBJbWFnZVRpbWVvdXRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNyZWF0ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkZWxldGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdXBkYXRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS51cGRhdGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VUaW1lb3V0c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogSW1hZ2VUaW1lb3V0cyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3JlYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNyZWF0ZSA9IHRoaXMuX2NyZWF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlbGV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGUgPSB0aGlzLl9kZWxldGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91cGRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXBkYXRlID0gdGhpcy5fdXBkYXRlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogSW1hZ2VUaW1lb3V0cyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3JlYXRlID0gdmFsdWUuY3JlYXRlO1xuICAgICAgdGhpcy5fZGVsZXRlID0gdmFsdWUuZGVsZXRlO1xuICAgICAgdGhpcy5fdXBkYXRlID0gdmFsdWUudXBkYXRlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNyZWF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcmVhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3JlYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcmVhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVhdGUoKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcmVhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlO1xuICB9XG5cbiAgLy8gZGVsZXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGV0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsZXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxldGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlbGV0ZSgpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlbGV0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWxldGU7XG4gIH1cblxuICAvLyB1cGRhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXBkYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1cGRhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVwZGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXBkYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXBkYXRlKCkge1xuICAgIHRoaXMuX3VwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXBkYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlIGRvY2tlcl9pbWFnZX1cbiovXG5leHBvcnQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiZG9ja2VyX2ltYWdlXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIEltYWdlIHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIEltYWdlIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBJbWFnZSB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MvcmVzb3VyY2VzL2ltYWdlI2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBJbWFnZSB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJkb2NrZXJfaW1hZ2VcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcy9yZXNvdXJjZXMvaW1hZ2UgZG9ja2VyX2ltYWdlfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBJbWFnZUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBJbWFnZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnZG9ja2VyX2ltYWdlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2RvY2tlcicsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNi4yJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9mb3JjZVJlbW92ZSA9IGNvbmZpZy5mb3JjZVJlbW92ZTtcbiAgICB0aGlzLl9rZWVwTG9jYWxseSA9IGNvbmZpZy5rZWVwTG9jYWxseTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fcGxhdGZvcm0gPSBjb25maWcucGxhdGZvcm07XG4gICAgdGhpcy5fcHVsbFRyaWdnZXJzID0gY29uZmlnLnB1bGxUcmlnZ2VycztcbiAgICB0aGlzLl90cmlnZ2VycyA9IGNvbmZpZy50cmlnZ2VycztcbiAgICB0aGlzLl9idWlsZC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmJ1aWxkQXR0cmlidXRlO1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGZvcmNlX3JlbW92ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mb3JjZVJlbW92ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZm9yY2VSZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZm9yY2VfcmVtb3ZlJyk7XG4gIH1cbiAgcHVibGljIHNldCBmb3JjZVJlbW92ZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZm9yY2VSZW1vdmUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGb3JjZVJlbW92ZSgpIHtcbiAgICB0aGlzLl9mb3JjZVJlbW92ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZm9yY2VSZW1vdmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yY2VSZW1vdmU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGltYWdlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW1hZ2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ltYWdlX2lkJyk7XG4gIH1cblxuICAvLyBrZWVwX2xvY2FsbHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2VlcExvY2FsbHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGtlZXBMb2NhbGx5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2tlZXBfbG9jYWxseScpO1xuICB9XG4gIHB1YmxpYyBzZXQga2VlcExvY2FsbHkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2tlZXBMb2NhbGx5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2VlcExvY2FsbHkoKSB7XG4gICAgdGhpcy5fa2VlcExvY2FsbHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtlZXBMb2NhbGx5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tlZXBMb2NhbGx5O1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBwbGF0Zm9ybSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wbGF0Zm9ybT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwbGF0Zm9ybScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGxhdGZvcm0odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYXRmb3JtID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGxhdGZvcm0oKSB7XG4gICAgdGhpcy5fcGxhdGZvcm0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBsYXRmb3JtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXRmb3JtO1xuICB9XG5cbiAgLy8gcHVsbF90cmlnZ2VycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wdWxsVHJpZ2dlcnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgcHVsbFRyaWdnZXJzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdwdWxsX3RyaWdnZXJzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHVsbFRyaWdnZXJzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3B1bGxUcmlnZ2VycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFB1bGxUcmlnZ2VycygpIHtcbiAgICB0aGlzLl9wdWxsVHJpZ2dlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHB1bGxUcmlnZ2Vyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wdWxsVHJpZ2dlcnM7XG4gIH1cblxuICAvLyByZXBvX2RpZ2VzdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlcG9EaWdlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBvX2RpZ2VzdCcpO1xuICB9XG5cbiAgLy8gdHJpZ2dlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHJpZ2dlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0cmlnZ2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RyaWdnZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0cmlnZ2Vycyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RyaWdnZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHJpZ2dlcnMoKSB7XG4gICAgdGhpcy5fdHJpZ2dlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRyaWdnZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXJzO1xuICB9XG5cbiAgLy8gYnVpbGQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVpbGQgPSBuZXcgSW1hZ2VCdWlsZE91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImJ1aWxkXCIpO1xuICBwdWJsaWMgZ2V0IGJ1aWxkQXR0cmlidXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZDtcbiAgfVxuICBwdWJsaWMgcHV0QnVpbGRBdHRyaWJ1dGUodmFsdWU6IEltYWdlQnVpbGQpIHtcbiAgICB0aGlzLl9idWlsZC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVpbGRBdHRyaWJ1dGUoKSB7XG4gICAgdGhpcy5fYnVpbGQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVpbGRBdHRyaWJ1dGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzID0gbmV3IEltYWdlVGltZW91dHNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ0aW1lb3V0c1wiKTtcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHM7XG4gIH1cbiAgcHVibGljIHB1dFRpbWVvdXRzKHZhbHVlOiBJbWFnZVRpbWVvdXRzKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcmNlX3JlbW92ZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2ZvcmNlUmVtb3ZlKSxcbiAgICAgIGtlZXBfbG9jYWxseTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2tlZXBMb2NhbGx5KSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgcGxhdGZvcm06IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3BsYXRmb3JtKSxcbiAgICAgIHB1bGxfdHJpZ2dlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9wdWxsVHJpZ2dlcnMpLFxuICAgICAgdHJpZ2dlcnM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RyaWdnZXJzKSxcbiAgICAgIGJ1aWxkOiBpbWFnZUJ1aWxkVG9UZXJyYWZvcm0odGhpcy5fYnVpbGQuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0aW1lb3V0czogaW1hZ2VUaW1lb3V0c1RvVGVycmFmb3JtKHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgZm9yY2VfcmVtb3ZlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fZm9yY2VSZW1vdmUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAga2VlcF9sb2NhbGx5OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fa2VlcExvY2FsbHkpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHBsYXRmb3JtOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9wbGF0Zm9ybSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHB1bGxfdHJpZ2dlcnM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9wdWxsVHJpZ2dlcnMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RyaWdnZXJzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgYnVpbGQ6IHtcbiAgICAgICAgdmFsdWU6IGltYWdlQnVpbGRUb0hjbFRlcnJhZm9ybSh0aGlzLl9idWlsZC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJJbWFnZUJ1aWxkTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHRpbWVvdXRzOiB7XG4gICAgICAgIHZhbHVlOiBpbWFnZVRpbWVvdXRzVG9IY2xUZXJyYWZvcm0odGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwic3RydWN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiSW1hZ2VUaW1lb3V0c1wiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19