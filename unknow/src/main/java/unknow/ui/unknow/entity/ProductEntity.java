package unknow.ui.unknow.entity;

import unknow.ui.unknow.common.IdLongEntity;

import javax.persistence.Entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class ProductEntity extends IdLongEntity {

  private String name;
}
