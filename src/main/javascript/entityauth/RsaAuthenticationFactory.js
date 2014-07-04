/**
 * Copyright (c) 2012-2014 Netflix, Inc.  All rights reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * <p>RSA asymmetric keys entity authentication factory.</p>
 *
 * @author Wesley Miaw <wmiaw@netflix.com>
 * @implements {EntityAuthenticationFactory}
 */
var RsaAuthenticationFactory = EntityAuthenticationFactory.extend({
    /**
     * <p>Construct a new RSA asymmetric keys authentication factory instance.</p>
     *
     * @param {RsaStore} store RSA public key store.
     * @constructor
     */
    init: function init(store) {
        init.base.call(this, EntityAuthenticationScheme.RSA);

        // The properties.
        var props = {
            store: { value: store, writable: false, enumerable: false, configurable: false }
        };
        Object.defineProperties(this, props);
    },

    /** @inheritDoc */
    createData: function createData(ctx, entityAuthJO) {
        return RsaAuthenticationData$parse(entityAuthJO);
    },

    /** @inheritDoc */
    getCryptoContext: function getCryptoContext(ctx, authdata) {
        // Make sure we have the right kind of entity authentication data.
        if (!(authdata instanceof RsaAuthenticationData))
            throw new MslInternalException("Incorrect authentication data type " + authdata + ".");

        // Extract RSA authentication data.
        var identity = authdata.identity;
        var pubkeyid = authdata.publicKeyId;
        var publicKey = this.store.getPublicKey(pubkeyid);
        if (!publicKey)
            throw new MslEntityAuthException(MslError.RSA_PUBLICKEY_NOT_FOUND, pubkeyid).setEntity(authdata);

        // Return the crypto context.
        return new RsaCryptoContext(ctx, identity, null, publicKey, RsaCryptoContext$Mode.SIGN_VERIFY);
    },
});