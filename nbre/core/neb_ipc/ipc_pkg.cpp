// Copyright (C) 2018 go-nebulas authors
//
// This file is part of the go-nebulas library.
//
// the go-nebulas library is free software: you can redistribute it and/or
// modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// the go-nebulas library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with the go-nebulas library.  If not, see
// <http://www.gnu.org/licenses/>.
//
#include "core/neb_ipc/ipc_pkg.h"

namespace neb {
namespace core {
const ipc_pkg_type_id_t nbre_version_ack::pkg_identifier;

module_info pkg_identifier_to_module_info(ipc_pkg_type_id_t type) {
  switch (type) {
  case ipc_pkg_nbre_version_req:
    return module_info("foo", "_Z15entry_point_fooPN3neb4core6driverEPv");
    break;
  default:
    throw std::logic_error("unsupported ipc_pkg_type_id_t");
  }
}
}
}
